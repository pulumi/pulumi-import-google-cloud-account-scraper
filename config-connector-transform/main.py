import argparse
import yaml
import pprint
import json
import re

parser = argparse.ArgumentParser(
    prog='config-connector-transform',
    description='Transforms a YAML output from config-connector to JSON suitable for the `pulumi import` command.'
)

parser.add_argument(
    '-i',
    '--infile',
    help='The path to a YAML file containing config-connector output',
    required=True
)

parser.add_argument(
    '-o',
    '--outfile',
    help='The path to which the Pulumi import JSON should be written',
    required=True
)

# TODO: raise if the outfile already exists
# TODO: Add a param to force overwrite of the outfile

args = parser.parse_args()

with open(args.infile, 'r') as ymlfile:
    docs = list(yaml.load_all(ymlfile, yaml.Loader))

skipped_resources = {}
converted_resources = {}
resources = []


def get_logging_log_sink_id(k8s_resource):
    return f"projects/{k8s_resource['spec']['projectRef']['external']}/sinks/{k8s_resource['metadata']['name']}"


def get_compute_instance_id(k8s_resource):
    return f"{k8s_resource['metadata']['annotations']['cnrm.cloud.google.com/project-id']}/{k8s_resource['spec']['zone']}/{k8s_resource['metadata']['name']}"


resource_type_mappings = {
    'ArtifactRegistryRepository': {
        'pulumi_type': 'gcp:artifactregistry/repository:Repository'
    },
    'ComputeDisk': {
        'pulumi_type': 'gcp:compute/disk:Disk',
    },
    'ComputeFirewall': {
        'pulumi_type': 'gcp:compute/firewall:Firewall'
    },
    'ComputeInstance': {
        'pulumi_type': 'gcp:compute/instance:Instance',
        'get_id': get_compute_instance_id,
    },
    'ComputeForwardingRule': {
        'pulumi_type': 'gcp:compute/forwardingRule:ForwardingRule'
    },
    'ComputeNetwork': {
        'pulumi_type': 'gcp:compute/network:Network'
    },
    'ComputeHTTPHealthCheck': {
        'pulumi_type': 'gcp:compute/httpHealthCheck:HttpHealthCheck'
    },
    'ComputeInstanceGroup': {
        'pulumi_type': 'gcp:compute/instanceGroup:InstanceGroup',
        'get_id': get_compute_instance_id,
    },
    'ComputeSubnetwork': {
        'pulumi_type': 'gcp:compute/subnetwork:Subnetwork'
    },
    'ComputeTargetPool': {
        'pulumi_type': 'gcp:compute/targetPool:TargetPool'
    },
    'ComputeSnapshot': {
        'pulumi_type': 'gcp:compute/snapshot:Snapshot'
    },
    'LoggingLogSink': {
        'pulumi_type': 'gcp:logging/projectSink:ProjectSink',
        'get_id': get_logging_log_sink_id,
    },
}


def get_storage_bucket_id(k8s_resource):
    return f"b/{k8s_resource['spec']['resourceRef']['external']}"


iam_type_mappings = {
    'IAMStorageBucket': {
        'pulumi_type': 'gcp:storage/bucketIAMPolicy:BucketIAMPolicy',
        'get_id': get_storage_bucket_id
    },
    # Additional mappings would go here.
}


def get_default_id(k8s_resource):
    """Returns the default ID of an object, adding region and zone if they can be determined"""
    id = ""

    if 'region' in k8s_resource['spec']:
        id += f"{k8s_resource['spec']['region']}/"

    if 'location' in k8s_resource['spec']:
        id += f"{k8s_resource['spec']['location']}/"

    id += k8s_resource['spec']['resourceID']

    return id


def k8s_resource_to_pulumi_resource(k8s_resource):
    k8s_type = k8s_resource['kind']

    if k8s_type == 'Project':
        print("Type 'Project' will be skipped as we import with a project already defined.")
        return None

    # In the Google Classic provider, IAM resources exist for each resource to
    # which the permissions apply (e.g. BucketIAMPolicy), therefore we have to
    # do an additional mapping to get from an IAM resource in the YAML export to
    # a Pulumi type:
    if k8s_type == "IAMPolicy":
        if 'spec' not in k8s_resource:
            print(
                "Expected a key 'spec' in a resource of type 'IAMPolicy', but did not find it. Skipping.")
            return None

        if 'resourceRef' not in k8s_resource['spec']:
            print("Expected a key 'spec.resourceRef' in a resource of type 'IAMPolicy', but did not find it. Skipping.")
            return None

        if 'kind' not in k8s_resource['spec']['resourceRef']:
            print("Expected a key 'spec.resourceRef.kind' in a resource of type 'IAMPolicy', but did not find it. Skipping.")
            return None

        ref_type = k8s_resource['spec']['resourceRef']['kind']
        if ref_type not in iam_type_mappings:
            print(
                f"Could not find a mapping to a Pulumi type for an IAMPolicy for resource type '{ref_type}'. Skipping.")
            return None

        return {
            'type': iam_type_mappings[ref_type]['pulumi_type'],
            'name': k8s_resource['metadata']['name'],
            'id': iam_type_mappings[ref_type]['get_id'](k8s_resource),
        }

    if k8s_type in resource_type_mappings:
        if 'get_id' in resource_type_mappings[k8s_type]:
            return {
                'type': resource_type_mappings[k8s_type]['pulumi_type'],
                'name': k8s_resource['metadata']['name'],
                'id': resource_type_mappings[k8s_type]['get_id'](k8s_resource),
            }

        return {
            'type': resource_type_mappings[k8s_type]['pulumi_type'],
            'name': k8s_resource['metadata']['name'],
            'id': get_default_id(k8s_resource),
        }

    # TODO: Try automapping.
    # TODO: Attempt to split along CamelCase and parse accordingly
    # k8s_type_camel_case_split = re.sub(
    #     '([A-Z][a-z]+)', r' \1', re.sub('([A-Z]+)', r' \1', k8s_type)).split()

    return None


for doc in docs:
    pulumi_resource = k8s_resource_to_pulumi_resource(doc)

    if pulumi_resource is None:
        k8s_resource_type = doc['kind']
        print(
            f"Resource type '{k8s_resource_type}' could not be mapped to a Pulumi type. This resource will be omitted from the output.")
        if k8s_resource_type in skipped_resources:
            skipped_resources[k8s_resource_type] += 1
        else:
            skipped_resources[k8s_resource_type] = 1

        continue

    resources.append(pulumi_resource)

with open(args.outfile, 'w') as outfile:
    outfile_object = {
        'resources': resources,
    }
    outfile.write(json.dumps(outfile_object, indent=2))


print(f"Skipped resources:")
pprint.pp(skipped_resources)
