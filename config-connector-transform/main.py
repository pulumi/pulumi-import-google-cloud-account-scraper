import argparse
import yaml
import pprint
import json

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

parser.add_argument(
    '-p',
    '--project',
    help='The default project to which assign to a resource if an explicit project cannot be found.',
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
default_id_counter = 0

# TODO: Move these to inline lambdas once we're confident we never need more
# than in inline expression:


def get_logging_log_sink_id(k8s_resource):
    return f"projects/{k8s_resource['spec']['projectRef']['external']}/sinks/{k8s_resource['metadata']['name']}"


def get_compute_disk_id(k8s_resource):
    return f"{k8s_resource['spec']['projectRef']['external']}/{k8s_resource['spec']['location']}/{k8s_resource['metadata']['name']}"


def get_compute_instance_id(k8s_resource):
    return f"{k8s_resource['metadata']['annotations']['cnrm.cloud.google.com/project-id']}/{k8s_resource['spec']['zone']}/{k8s_resource['metadata']['name']}"


def get_compute_instance_template_id(k8s_resource):
    # return f"{k8s_resource['metadata']['annotations']['cnrm.cloud.google.com/project-id']}/{k8s_resource['spec']['region']}/{k8s_resource['spec']['resourceID']}"
    return f"{k8s_resource['spec']['resourceID']}"


def get_container_node_pool_id(k8s_resource):
    project_id = k8s_resource["metadata"]["annotations"][
        "cnrm.cloud.google.com/project-id"
    ]
    location = k8s_resource["spec"]["location"]
    cluster_name = k8s_resource["spec"]["clusterRef"]["external"]
    node_pool_name = k8s_resource["metadata"]["name"]

    return (
        f"projects/{project_id}/"
        f"locations/{location}/"
        f"clusters/{cluster_name}/"
        f"nodePools/{node_pool_name}"
    )


def get_storage_bucket_id(k8s_resource):
    return f"b/{k8s_resource['spec']['resourceRef']['external']}"


def get_iam_service_account_id(k8s_resource):
    return f"{k8s_resource['spec']['resourceID']}@{k8s_resource['metadata']['annotations']['cnrm.cloud.google.com/project-id']}.iam.gserviceaccount.com"


def get_iam_policy_member_id(k8s_resource):
    project_name = k8s_resource["spec"]["resourceRef"]["external"]
    role = k8s_resource["spec"]["role"]
    member = k8s_resource["spec"]["member"]

    return f"{project_name} {role} {member}"


def get_service_id(k8s_resource):
    return f"{args.project}/{k8s_resource['metadata']['name']}"


# TODO: TEMPORARY!! This is to simplify down the setup and hunt down the bugs in the `pulumi up` operation
#   These are confirmed to have issues
#   All of these should be in `resurce_type_mappings` below
broken_types = {
    # TODO: These fail import with e.g. 'Preview failed: resource
    # 'projects/438338752289/sinks/a-default' does not exist'. We need to figure
    # out what actual cloud resources these represent and figure out whehter
    # they actually need to be imported.
    'ComputeBackendService': {
        'pulumi_type': 'gcp:compute/backendService:BackendService',
    },
    'LoggingLogSink': {
        'pulumi_type': 'gcp:logging/projectSink:ProjectSink',
        'get_id': get_logging_log_sink_id,
    },
}

resource_type_mappings = {
    'ArtifactRegistryRepository': {
        'pulumi_type': 'gcp:artifactregistry/repository:Repository'
    },
    'ComputeDisk': {
        'pulumi_type': 'gcp:compute/disk:Disk',
        'get_id': get_compute_disk_id,
    },
    'ComputeFirewall': {'pulumi_type': 'gcp:compute/firewall:Firewall'},
    'ComputeForwardingRule': {
        'pulumi_type': 'gcp:compute/forwardingRule:ForwardingRule'
    },
    'ComputeHTTPHealthCheck': {
        'pulumi_type': 'gcp:compute/httpHealthCheck:HttpHealthCheck'
    },
    'ComputeInstance': {
        'pulumi_type': 'gcp:compute/instance:Instance',
        'get_id': get_compute_instance_id,
    },
    'ComputeInstanceGroup': {
        'pulumi_type': 'gcp:compute/instanceGroup:InstanceGroup',
        'get_id': get_compute_instance_id,
    },
    'ComputeInstanceTemplate': {
        'pulumi_type': 'gcp:compute/instanceTemplate:InstanceTemplate',
        'get_id': get_compute_instance_template_id,
    },
    'ComputeNetwork': {'pulumi_type': 'gcp:compute/network:Network'},
    'ContainerCluster': {'pulumi_type': 'gcp:container/cluster:Cluster'},
    'ContainerNodePool': {
        'pulumi_type': 'gcp:container/nodePool:NodePool',
        'get_id': get_container_node_pool_id,
    },
    'ComputeSnapshot': {'pulumi_type': 'gcp:compute/snapshot:Snapshot'},
    'ComputeSubnetwork': {'pulumi_type': 'gcp:compute/subnetwork:Subnetwork'},
    'ComputeTargetPool': {'pulumi_type': 'gcp:compute/targetPool:TargetPool'},
    'IAMServiceAccount': {
        'pulumi_type': 'gcp:serviceAccount/account:Account',
        'get_id': get_iam_service_account_id,
    },
    'Service': {
        'pulumi_type': 'gcp:projects/service:Service',
        'get_id': get_service_id,
    },
    'StorageBucket': {
        'pulumi_type': 'gcp:storage/bucket:Bucket',
    },
}


def get_iam_project_id(k8s_resource):
    return k8s_resource['spec']['resourceRef']['external']


iam_type_mappings = {
    'StorageBucket': {
        'pulumi_type': 'gcp:storage/bucketIAMPolicy:BucketIAMPolicy',
        'get_id': get_storage_bucket_id,
    },
    'Project': {
        'pulumi_type': 'gcp:projects/iAMPolicy:IAMPolicy',
        'get_id': get_iam_project_id,
    },
    'IAMPolicyMember': {
        'pulumi_type': 'gcp:projects/iAMMember:IAMMember',
        'get_id': get_iam_policy_member_id,
    },
    # Additional mappings would go here.
}


def get_default_id(k8s_resource):
    """Returns the most common form of an ID of a Google Cloud resource, adding
    region and zone if they can be determined"""
    id = ""

    if 'region' in k8s_resource['spec']:
        id += f"{k8s_resource['spec']['region']}/"

    if 'location' in k8s_resource['spec']:
        id += f"{k8s_resource['spec']['location']}/"

    id += k8s_resource['spec']['resourceID']

    if id == "":
        id = k8s_resource['metadata']['name'] + str(default_id_counter)
        default_id_counter += 1

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
    if k8s_type == "IAMPolicy" or k8s_type == "IAMPolicyMember":
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

    # The 'disabled' attribute is not specified unless it's true (in our sample input data, at least).
    if k8s_type == 'IAMServiceAccount' and 'disabled' in k8s_resource['spec']:
        print(
            f"IAMServiceAccount '{k8s_resource['metadata']['name']}' is inactive and will be skipped.")
        return None

    # if k8s_type == 'Service' and k8s_resource['apiVersion'].startswith('serviceusage'):
    #     print(f"Resources of type 'Service' (Service Usage) do not map to an obvious Pulumi resource type and will be skipped.")
    #     return None

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

    # TODO: As a future improvement, try auto-mapping from the K8s type to the
    # Pulumi type. We might attempt to split along CamelCase in the k8s type and
    # and parse accordingly, e.g.:
    # k8s_type_camel_case_split = re.sub(
    #     '([A-Z][a-z]+)', r' \1', re.sub('([A-Z]+)', r' \1', k8s_type)).split()

    print(f"No mapping found for K8s resource type '{k8s_type}'. Skipping.")
    return None


def ensure_unique_name(pulumi_resource):
    """Ensures that each resource has a unique name. `pulumi import` will fail
    if multiple resources have the same name due to
    https://github.com/pulumi/pulumi/issues/6032"""

    base_name = pulumi_resource["name"]
    counter = 1

    while any(
        resource.get("name") == pulumi_resource["name"] for resource in resources
    ):
        pulumi_resource["name"] = f"{base_name}-{counter}"
        counter += 1


for doc in docs:
    pulumi_resource = k8s_resource_to_pulumi_resource(doc)

    if pulumi_resource is None:
        k8s_resource_type = doc['kind']

        if k8s_resource_type in skipped_resources:
            skipped_resources[k8s_resource_type] += 1
        else:
            skipped_resources[k8s_resource_type] = 1

        continue

    ensure_unique_name(pulumi_resource)
    resources.append(pulumi_resource)

with open(args.outfile, 'w') as outfile:
    outfile_object = {
        'resources': resources,
    }
    outfile.write(json.dumps(outfile_object, indent=2))


print(f"Skipped resources:")
pprint.pp(skipped_resources)
