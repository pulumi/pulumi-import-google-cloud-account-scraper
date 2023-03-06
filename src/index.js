import * as compute from "@google-cloud/compute";

const PROJECT = "pulumi-ce-team";
const REGION = 'us-central1'
const ZONE = 'us-central1-a'
const resources = [];

const getResource = async (type, listFunc, namePropertyName, idPropertyName) => {
  const results = []

  for await(const response of await listFunc()) {
    results.push({
      type,
      name: response[namePropertyName],
      id: response[idPropertyName],
    })
  }

  return results;
}

const networks = await getResource(
  "gcp:compute/network:Network",
  async () => new compute.NetworksClient().listAsync({ project: PROJECT }),
  "name",
  "id"
);
resources.push(...networks);

const subnets = await getResource(
  "gcp:compute/subnet:Subnet",
  async () => new compute.SubnetworksClient().listAsync({ project: PROJECT, region: REGION }),
  "name",
  "id"
);
resources.push(...subnets);

const firewalls = await getResource(
  "gcp:compute/firewall:Firewall",
  async () => new compute.FirewallsClient().listAsync({ project: PROJECT, region: REGION }),
  "name",
  "id"
);
resources.push(...firewalls);

const instances = await getResource(
  "gcp:compute/instance:Instance",
  async () => new compute.InstancesClient().listAsync({ project: PROJECT, zone: ZONE }),
  "name",
  "id"
);
resources.push(...instances);

const pulumiImport = {
  resources
};
console.log(JSON.stringify(pulumiImport, null, 2));