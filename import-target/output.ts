import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

const gcf_artifacts = new gcp.artifactregistry.Repository("gcf-artifacts", {
    description: "This repository is created and used by Cloud Functions for storing function docker images.",
    format: "DOCKER",
    labels: {
        "goog-managed-by": "cloudfunctions",
    },
    location: "europe-west1",
    project: "pulumi-ce-team",
    repositoryId: "gcf-artifacts",
}, {
    protect: true,
});
const gke_helloworld_2a71d4f_pvc_1e6aa931_d742_437e_a52b_413999ace2be = new gcp.compute.Disk("gke-helloworld-2a71d4f-pvc-1e6aa931-d742-437e-a52b-413999ace2be", {
    description: "{\"kubernetes.io/created-for/pv/name\":\"pvc-1e6aa931-d742-437e-a52b-413999ace2be\",\"kubernetes.io/created-for/pvc/name\":\"wpdev-wordpress\",\"kubernetes.io/created-for/pvc/namespace\":\"default\"}",
    labels: {
        "goog-gke-volume": "",
    },
    name: "gke-helloworld-2a71d4f-pvc-1e6aa931-d742-437e-a52b-413999ace2be",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-central1-a",
}, {
    protect: true,
});
const test2_wireguard_instance_1436674 = new gcp.compute.Disk("test2-wireguard-instance-1436674", {
    image: "https://www.googleapis.com/compute/beta/projects/debian-cloud/global/images/debian-11-bullseye-v20220406",
    name: "test2-wireguard-instance-1436674",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "australia-southeast2-a",
}, {
    protect: true,
});
const gke_helloworld_2a71d4f_pvc_c006043a_d83c_4fba_a03b_4b5e5d36d0ee = new gcp.compute.Disk("gke-helloworld-2a71d4f-pvc-c006043a-d83c-4fba-a03b-4b5e5d36d0ee", {
    description: "{\"kubernetes.io/created-for/pv/name\":\"pvc-c006043a-d83c-4fba-a03b-4b5e5d36d0ee\",\"kubernetes.io/created-for/pvc/name\":\"data-wpdev-mariadb-0\",\"kubernetes.io/created-for/pvc/namespace\":\"default\"}",
    labels: {
        "goog-gke-volume": "",
    },
    name: "gke-helloworld-2a71d4f-pvc-c006043a-d83c-4fba-a03b-4b5e5d36d0ee",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 8,
    zone: "us-central1-a",
}, {
    protect: true,
});
const gke_us_west2_airflow_5_pvc_9b7103e7_7a83_4886_a7d4_0316ff560a48 = new gcp.compute.Disk("gke-us-west2-airflow-5-pvc-9b7103e7-7a83-4886-a7d4-0316ff560a48", {
    description: "{\"kubernetes.io/created-for/pv/name\":\"pvc-9b7103e7-7a83-4886-a7d4-0316ff560a48\",\"kubernetes.io/created-for/pvc/name\":\"airflow-redis-volume-airflow-redis-0\",\"kubernetes.io/created-for/pvc/namespace\":\"default\"}",
    labels: {
        "goog-composer-environment": "airflow-5692738",
        "goog-composer-location": "us-west2",
        "goog-composer-version": "composer-1-13-3-airflow-1-10-10",
        "goog-gke-volume": "",
    },
    name: "gke-us-west2-airflow-5-pvc-9b7103e7-7a83-4886-a7d4-0316ff560a48",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 2,
    zone: "us-west2-a",
}, {
    protect: true,
});
const gke_helloworld_66f6fac_pvc_f7fa39bc_cb41_410c_8a9e_6272c1f58fd4 = new gcp.compute.Disk("gke-helloworld-66f6fac-pvc-f7fa39bc-cb41-410c-8a9e-6272c1f58fd4", {
    description: "{\"kubernetes.io/created-for/pv/name\":\"pvc-f7fa39bc-cb41-410c-8a9e-6272c1f58fd4\",\"kubernetes.io/created-for/pvc/name\":\"p8s-prometheus-alertmanager\",\"kubernetes.io/created-for/pvc/namespace\":\"default\"}",
    labels: {
        "goog-gke-volume": "",
    },
    name: "gke-helloworld-66f6fac-pvc-f7fa39bc-cb41-410c-8a9e-6272c1f58fd4",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 2,
    zone: "us-central1-a",
}, {
    protect: true,
});
const webserver_0_0_0bf0fa7 = new gcp.compute.Disk("webserver-0-0-0bf0fa7", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-0bf0fa7",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const gke_helloworld_66f6fac_pvc_899f36e5_bf25_4f9a_be5a_38e38a1a89f2 = new gcp.compute.Disk("gke-helloworld-66f6fac-pvc-899f36e5-bf25-4f9a-be5a-38e38a1a89f2", {
    description: "{\"kubernetes.io/created-for/pv/name\":\"pvc-899f36e5-bf25-4f9a-be5a-38e38a1a89f2\",\"kubernetes.io/created-for/pvc/name\":\"p8s-prometheus-server\",\"kubernetes.io/created-for/pvc/namespace\":\"default\"}",
    labels: {
        "goog-gke-volume": "",
    },
    name: "gke-helloworld-66f6fac-pvc-899f36e5-bf25-4f9a-be5a-38e38a1a89f2",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 8,
    zone: "us-central1-a",
}, {
    protect: true,
});
const gke_helloworld_5050543_pvc_34aaab12_d1b5_4276_aff5_60286550fc5a = new gcp.compute.Disk("gke-helloworld-5050543-pvc-34aaab12-d1b5-4276-aff5-60286550fc5a", {
    description: "{\"kubernetes.io/created-for/pv/name\":\"pvc-34aaab12-d1b5-4276-aff5-60286550fc5a\",\"kubernetes.io/created-for/pvc/name\":\"p8s-prometheus-alertmanager\",\"kubernetes.io/created-for/pvc/namespace\":\"default\"}",
    labels: {
        "goog-gke-volume": "",
    },
    name: "gke-helloworld-5050543-pvc-34aaab12-d1b5-4276-aff5-60286550fc5a",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 2,
    zone: "us-central1-a",
}, {
    protect: true,
});
const webserver_0_0_422f784 = new gcp.compute.Disk("webserver-0-0-422f784", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-422f784",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const instance_5807a0d = new gcp.compute.Disk("instance-5807a0d", {
    image: "https://www.googleapis.com/compute/beta/projects/debian-cloud/global/images/debian-11-bullseye-v20230206",
    name: "instance-5807a0d",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-central1-a",
}, {
    protect: true,
});
const gke_us_west2_airflow_2_pvc_40079bef_3a9f_4504_82f8_e23cb3a561c6 = new gcp.compute.Disk("gke-us-west2-airflow-2-pvc-40079bef-3a9f-4504-82f8-e23cb3a561c6", {
    description: "{\"kubernetes.io/created-for/pv/name\":\"pvc-40079bef-3a9f-4504-82f8-e23cb3a561c6\",\"kubernetes.io/created-for/pvc/name\":\"airflow-redis-volume-airflow-redis-0\",\"kubernetes.io/created-for/pvc/namespace\":\"default\"}",
    labels: {
        "goog-composer-environment": "airflow-2e495e3",
        "goog-composer-location": "us-west2",
        "goog-composer-version": "composer-1-13-3-airflow-1-10-10",
        "goog-gke-volume": "",
    },
    name: "gke-us-west2-airflow-2-pvc-40079bef-3a9f-4504-82f8-e23cb3a561c6",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 2,
    zone: "us-west2-a",
}, {
    protect: true,
});
const gke_helloworld_5050543_pvc_aaac78fe_5b4a_4f05_84e4_aa2a3704d09c = new gcp.compute.Disk("gke-helloworld-5050543-pvc-aaac78fe-5b4a-4f05-84e4-aa2a3704d09c", {
    description: "{\"kubernetes.io/created-for/pv/name\":\"pvc-aaac78fe-5b4a-4f05-84e4-aa2a3704d09c\",\"kubernetes.io/created-for/pvc/name\":\"p8s-prometheus-server\",\"kubernetes.io/created-for/pvc/namespace\":\"default\"}",
    labels: {
        "goog-gke-volume": "",
    },
    name: "gke-helloworld-5050543-pvc-aaac78fe-5b4a-4f05-84e4-aa2a3704d09c",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 8,
    zone: "us-central1-a",
}, {
    protect: true,
});
const webserver_0_0_472eb90 = new gcp.compute.Disk("webserver-0-0-472eb90", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-472eb90",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_3eefd5a = new gcp.compute.Disk("webserver-0-0-3eefd5a", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-3eefd5a",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_3b0b6fc = new gcp.compute.Disk("webserver-0-0-3b0b6fc", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-3b0b6fc",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_41d5d42 = new gcp.compute.Disk("webserver-0-0-41d5d42", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-41d5d42",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_56ee3e1 = new gcp.compute.Disk("webserver-0-0-56ee3e1", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-56ee3e1",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_4ee50ae = new gcp.compute.Disk("webserver-0-0-4ee50ae", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-4ee50ae",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_202280b = new gcp.compute.Disk("webserver-0-0-202280b", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-202280b",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_0f70b7b = new gcp.compute.Disk("webserver-0-0-0f70b7b", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-0f70b7b",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_7f184e9 = new gcp.compute.Disk("webserver-0-0-7f184e9", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-7f184e9",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_922765c = new gcp.compute.Disk("webserver-0-0-922765c", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-922765c",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_962b747 = new gcp.compute.Disk("webserver-0-0-962b747", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-962b747",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_7f79c72 = new gcp.compute.Disk("webserver-0-0-7f79c72", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-7f79c72",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_75d9343 = new gcp.compute.Disk("webserver-0-0-75d9343", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-75d9343",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_789d6f9 = new gcp.compute.Disk("webserver-0-0-789d6f9", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-789d6f9",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_84259d3 = new gcp.compute.Disk("webserver-0-0-84259d3", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-84259d3",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_aca5ee4 = new gcp.compute.Disk("webserver-0-0-aca5ee4", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-aca5ee4",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_a11f915 = new gcp.compute.Disk("webserver-0-0-a11f915", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-a11f915",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_a3cf679 = new gcp.compute.Disk("webserver-0-0-a3cf679", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-a3cf679",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_99530b1 = new gcp.compute.Disk("webserver-0-0-99530b1", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-99530b1",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_703f079 = new gcp.compute.Disk("webserver-0-0-703f079", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-703f079",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_b96282d = new gcp.compute.Disk("webserver-0-0-b96282d", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-b96282d",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_aa8ea2c = new gcp.compute.Disk("webserver-0-0-aa8ea2c", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-aa8ea2c",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_8acb9ec = new gcp.compute.Disk("webserver-0-0-8acb9ec", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-8acb9ec",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_c31848c = new gcp.compute.Disk("webserver-0-0-c31848c", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-c31848c",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const pulumi_ce_team_iampolicy = new gcp.projects.IAMPolicy("pulumi-ce-team-iampolicy", {
    policyData: "{\"bindings\":[{\"members\":[\"serviceAccount:service-438338752289@gcp-sa-apigateway.iam.gserviceaccount.com\"],\"role\":\"roles/apigateway.serviceAgent\"},{\"members\":[\"serviceAccount:service-438338752289@gcp-sa-apigateway-mgmt.iam.gserviceaccount.com\"],\"role\":\"roles/apigateway_management.serviceAgent\"},{\"members\":[\"serviceAccount:service-438338752289@gcp-gae-service.iam.gserviceaccount.com\"],\"role\":\"roles/appengine.serviceAgent\"},{\"members\":[\"serviceAccount:service-438338752289@gcp-sa-artifactregistry.iam.gserviceaccount.com\"],\"role\":\"roles/artifactregistry.serviceAgent\"},{\"members\":[\"serviceAccount:service-438338752289@gcp-sa-bigquerydatatransfer.iam.gserviceaccount.com\"],\"role\":\"roles/bigquerydatatransfer.serviceAgent\"},{\"members\":[\"user:aurelien@requiem.fr\"],\"role\":\"roles/browser\"},{\"members\":[\"serviceAccount:service-438338752289@gcp-sa-cloudasset.iam.gserviceaccount.com\"],\"role\":\"roles/cloudasset.serviceAgent\"},{\"members\":[\"serviceAccount:438338752289@cloudbuild.gserviceaccount.com\"],\"role\":\"roles/cloudbuild.builds.builder\"},{\"members\":[\"serviceAccount:service-438338752289@gcp-sa-cloudbuild.iam.gserviceaccount.com\"],\"role\":\"roles/cloudbuild.serviceAgent\"},{\"members\":[\"serviceAccount:service-438338752289@gcf-admin-robot.iam.gserviceaccount.com\"],\"role\":\"roles/cloudfunctions.serviceAgent\"},{\"members\":[\"serviceAccount:service-438338752289@cloudcomposer-accounts.iam.gserviceaccount.com\"],\"role\":\"roles/composer.serviceAgent\"},{\"members\":[\"serviceAccount:service-438338752289@compute-system.iam.gserviceaccount.com\"],\"role\":\"roles/compute.serviceAgent\"},{\"members\":[\"serviceAccount:tushar@pulumi-ce-team.iam.gserviceaccount.com\"],\"role\":\"roles/container.admin\"},{\"members\":[\"serviceAccount:service-438338752289@gcp-sa-gkenode.iam.gserviceaccount.com\"],\"role\":\"roles/container.nodeServiceAgent\"},{\"members\":[\"serviceAccount:service-438338752289@container-engine-robot.iam.gserviceaccount.com\"],\"role\":\"roles/container.serviceAgent\"},{\"members\":[\"serviceAccount:tushar@pulumi-ce-team.iam.gserviceaccount.com\"],\"role\":\"roles/containeranalysis.admin\"},{\"members\":[\"serviceAccount:438338752289-compute@developer.gserviceaccount.com\",\"serviceAccount:438338752289@cloudservices.gserviceaccount.com\",\"serviceAccount:pulumi-ce-team@appspot.gserviceaccount.com\",\"serviceAccount:service-438338752289@containerregistry.iam.gserviceaccount.com\",\"serviceAccount:tushar@pulumi-ce-team.iam.gserviceaccount.com\"],\"role\":\"roles/editor\"},{\"members\":[\"serviceAccount:service-438338752289@firebase-rules.iam.gserviceaccount.com\"],\"role\":\"roles/firebaserules.system\"},{\"members\":[\"serviceAccount:service-438338752289@gcp-sa-firestore.iam.gserviceaccount.com\"],\"role\":\"roles/firestore.serviceAgent\"},{\"members\":[\"serviceAccount:aureq-test-sa@pulumi-ce-team.iam.gserviceaccount.com\",\"serviceAccount:codefresh-ci-cd-access@pulumi-ce-team.iam.gserviceaccount.com\",\"serviceAccount:demos-weekly-test@pulumi-ce-team.iam.gserviceaccount.com\",\"user:aureq@pulumi.com\",\"user:carl@pulumi.com\",\"user:josh@pulumi.com\",\"user:lbriggs@pulumi.com\",\"user:luke@pulumi.com\",\"user:mitch@pulumi.com\",\"user:phillip@pulumi.com\",\"user:piers@pulumi.com\",\"user:richard@pulumi.com\",\"user:tushar@pulumi.com\",\"user:v-ringo@pulumi.com\"],\"role\":\"roles/owner\"},{\"members\":[\"serviceAccount:service-438338752289@cloud-redis.iam.gserviceaccount.com\"],\"role\":\"roles/redis.serviceAgent\"},{\"members\":[\"serviceAccount:service-438338752289@serverless-robot-prod.iam.gserviceaccount.com\"],\"role\":\"roles/run.serviceAgent\"},{\"members\":[\"serviceAccount:tushar@pulumi-ce-team.iam.gserviceaccount.com\"],\"role\":\"roles/servicemanagement.admin\"},{\"members\":[\"serviceAccount:service-438338752289@service-networking.iam.gserviceaccount.com\"],\"role\":\"roles/servicenetworking.serviceAgent\"}]}",
    project: "projects/pulumi-ce-team",
}, {
    protect: true,
});
const webserver_0_0_e166c3a = new gcp.compute.Disk("webserver-0-0-e166c3a", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-e166c3a",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_d9cc98d = new gcp.compute.Disk("webserver-0-0-d9cc98d", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-d9cc98d",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_b37202a = new gcp.compute.Disk("webserver-0-0-b37202a", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-b37202a",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_cf2861a = new gcp.compute.Disk("webserver-0-0-cf2861a", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-cf2861a",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_ce7c59f = new gcp.compute.Disk("webserver-0-0-ce7c59f", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-ce7c59f",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_5e6d62e = new gcp.compute.Disk("webserver-0-0-5e6d62e", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-5e6d62e",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_47c851b = new gcp.compute.Disk("webserver-0-1-47c851b", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-47c851b",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_49436b0 = new gcp.compute.Disk("webserver-0-1-49436b0", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-49436b0",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_1e10c37 = new gcp.compute.Disk("webserver-0-1-1e10c37", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-1e10c37",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_ec5f8af = new gcp.compute.Disk("webserver-0-0-ec5f8af", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-ec5f8af",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_f0e97bc = new gcp.compute.Disk("webserver-0-0-f0e97bc", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-f0e97bc",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_3bf0e07 = new gcp.compute.Disk("webserver-0-1-3bf0e07", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-3bf0e07",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_e787d3e = new gcp.compute.Disk("webserver-0-0-e787d3e", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-e787d3e",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_fd806dc = new gcp.compute.Disk("webserver-0-0-fd806dc", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-fd806dc",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_e578dec = new gcp.compute.Disk("webserver-0-0-e578dec", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-e578dec",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_41fae7d = new gcp.compute.Disk("webserver-0-1-41fae7d", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-41fae7d",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_e624f4f = new gcp.compute.Disk("webserver-0-0-e624f4f", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-e624f4f",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_4e3366a = new gcp.compute.Disk("webserver-0-1-4e3366a", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-4e3366a",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_4f03cab = new gcp.compute.Disk("webserver-0-1-4f03cab", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-4f03cab",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_c45fce2 = new gcp.compute.Disk("webserver-0-0-c45fce2", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-c45fce2",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_295a4c2 = new gcp.compute.Disk("webserver-0-1-295a4c2", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-295a4c2",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_0d1e384 = new gcp.compute.Disk("webserver-0-1-0d1e384", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-0d1e384",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_65322a5 = new gcp.compute.Disk("webserver-0-1-65322a5", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-65322a5",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_82b3db2 = new gcp.compute.Disk("webserver-0-1-82b3db2", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-82b3db2",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_053a353 = new gcp.compute.Disk("webserver-0-1-053a353", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-053a353",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_fdcfc5f = new gcp.compute.Disk("webserver-0-0-fdcfc5f", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-fdcfc5f",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_12e713e = new gcp.compute.Disk("webserver-0-1-12e713e", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-12e713e",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_c6c77b8 = new gcp.compute.Disk("webserver-0-1-c6c77b8", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-c6c77b8",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_f766b51 = new gcp.compute.Disk("webserver-0-0-f766b51", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-f766b51",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_0_eec40de = new gcp.compute.Disk("webserver-0-0-eec40de", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-eec40de",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_6bc113a = new gcp.compute.Disk("webserver-0-1-6bc113a", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-6bc113a",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_be38143 = new gcp.compute.Disk("webserver-0-1-be38143", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-be38143",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_613bd84 = new gcp.compute.Disk("webserver-0-1-613bd84", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-613bd84",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_632563f = new gcp.compute.Disk("webserver-0-1-632563f", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-632563f",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_9ae32eb = new gcp.compute.Disk("webserver-0-1-9ae32eb", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-9ae32eb",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_ff3743e = new gcp.compute.Disk("webserver-0-1-ff3743e", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-ff3743e",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_a5e20be = new gcp.compute.Disk("webserver-0-1-a5e20be", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-a5e20be",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_8146f4a = new gcp.compute.Disk("webserver-0-1-8146f4a", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-8146f4a",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_05a0912 = new gcp.compute.Disk("webserver-0-1-05a0912", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-05a0912",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_fb965a8 = new gcp.compute.Disk("webserver-0-1-fb965a8", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-fb965a8",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_9c8ba22 = new gcp.compute.Disk("webserver-0-1-9c8ba22", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-9c8ba22",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_e31d6c2 = new gcp.compute.Disk("webserver-0-1-e31d6c2", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-e31d6c2",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_8bb74d6 = new gcp.compute.Disk("webserver-0-1-8bb74d6", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-8bb74d6",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_eb1494e = new gcp.compute.Disk("webserver-0-1-eb1494e", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-eb1494e",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_5084c3b = new gcp.compute.Disk("webserver-0-1-5084c3b", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-5084c3b",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const default_allow_icmp = new gcp.compute.Firewall("default-allow-icmp", {
    allows: [{
        protocol: "icmp",
    }],
    description: "Allow ICMP from anywhere",
    direction: "INGRESS",
    name: "default-allow-icmp",
    network: "https://www.googleapis.com/compute/v1/projects/pulumi-ce-team/global/networks/default",
    priority: 65534,
    project: "pulumi-ce-team",
    sourceRanges: ["0.0.0.0/0"],
}, {
    protect: true,
});
const k8s_fw_aba25a55d5e684826acb4827cbed47c9 = new gcp.compute.Firewall("k8s-fw-aba25a55d5e684826acb4827cbed47c9", {
    allows: [{
        ports: ["80"],
        protocol: "tcp",
    }],
    description: "{\"kubernetes.io/service-name\":\"pulumi-codefresh/pulumi-codefresh-nginx-lb-jv2tgcpo\", \"kubernetes.io/service-ip\":\"35.223.173.141\"}",
    direction: "INGRESS",
    name: "k8s-fw-aba25a55d5e684826acb4827cbed47c9",
    network: "https://www.googleapis.com/compute/v1/projects/pulumi-ce-team/global/networks/default",
    project: "pulumi-ce-team",
    sourceRanges: ["0.0.0.0/0"],
    targetTags: ["gke-pulumi-codefresh-a232330-fb9f4492-node"],
}, {
    protect: true,
});
const webserver_0_0_e0e0549 = new gcp.compute.Disk("webserver-0-0-e0e0549", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-e0e0549",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_fbb7702 = new gcp.compute.Disk("webserver-0-1-fbb7702", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-fbb7702",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_a305071 = new gcp.compute.Disk("webserver-0-1-a305071", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-a305071",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_03171c8 = new gcp.compute.Disk("webserver-0-1-03171c8", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-03171c8",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_ccbc237 = new gcp.compute.Disk("webserver-0-1-ccbc237", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-ccbc237",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const test2_wireguard_instance_1436674_1 = new gcp.compute.Instance("test2-wireguard-instance-1436674-1", {
    bootDisk: {
        deviceName: "persistent-disk-0",
        initializeParams: {
            image: "https://www.googleapis.com/compute/beta/projects/debian-cloud/global/images/debian-11-bullseye-v20220406",
            size: 10,
            type: "pd-standard",
        },
        source: "https://www.googleapis.com/compute/v1/projects/pulumi-ce-team/zones/australia-southeast2-a/disks/test2-wireguard-instance-1436674",
    },
    machineType: "e2-small",
    metadata: {
        "instance-type": "domestic",
        "ssh-keys": `admin:ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIO/BVxaZWnPy+5MVfHZkpPHmfCzF3rQvKAcwQ2Lruk0S ed25519@bobcatt@menfin.net
admin:ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJ/JLBJZTJ51En2DosK8pMCWVca3elD9ERsMohKsRhRn ed25519@docker@bobcatt@menfin.net
aureq:ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAGzE81v4KluE3DtbkwoXJMKcg0WRRXK3XjI62PbRFuYtXeM0iGkVd17XsQK2eaEeTPR0Fr2V/nh+bQYVGLdr7+yakfr5BoAPK0DoJjoGsFx16OVplNg46goALSZ87vSBcjbR9Yw2fAJgcGUEb6CvF+6THOYb3iTuleWj7sHDq2bUWrFMZwDaMu1S2TIldLQ9VXGHGGsO0ksimsWhmGfEITKhisg4lM2wD90DFdmMoLn1iAjVU2pAxmsqpNEO6lupCKU/OW6BkwRUztZ1LEyd0dhkcbwzUKoSJA0iUebVWK0d3nunFFv1WTxJxPl8DoSnpAhaPIsouzjfTgU4YPaIUkE= google-ssh {"userName":"aureq@pulumi.com","expireOn":"2023-02-07T21:15:06+0000"}
aureq:ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBEMbsQk5QNMI1ZVRfm/L/bNUkKGbox9eOcUf9XbA6Se9v6YVuxG9se+YllvNXVLitmaMZtY0Sxc6wKFHLHkk/4o= google-ssh {"userName":"aureq@pulumi.com","expireOn":"2023-02-07T21:17:46+0000"}
aureq:ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCV0ARe2p+hPuK8XN1sJd/iahI246On/5EF5E+uLtI32BDiPxuegJWukZuHx7jbF73l/qE6GoHnfPVqG/SvdZpvGcrjF/l+Ij005NGrJDiH9CBdQXjfx2wTfYIaJfffqB7tUDs6ampaCV+FcagYRZHMv3VSdYgoiAqryzlUcdig5kB43Uh/y/VVbOt/O00Opjc+OaRwR1So5Ps3JvUmiZ+3blRsXtnStTEeCPlt+m6n6qvcptcsWXJMydqjwK6nSv9K9u4oVmAuwwBh4ORKTL49S3SU3L5LlPQy7yVHckZIibWHE6nsx+cYINNc3ShJaVxDKVvNMXPQYgSMwynBllC3 google-ssh {"userName":"aureq@pulumi.com","expireOn":"2023-02-07T21:18:04+0000"}`,
        "startup-script": `#!/bin/bash

export DEBIAN_FRONTEND=noninteractive

fetch_metadata() {
    if [ -z "$1" ]; then
        return 1;
    fi
    local COUNTER=5

    while [ "$COUNTER" -gt 0 ]; do
        DATA="$(wget --header "Metadata-Flavor: Google" -q -O - "$1")"
        if [ -n "$DATA" ]; then
            echo "$DATA"
            return 0;
        fi
        wget --header "Metadata-Flavor: Google" -q -O - "$1" >> /tmp/wget.log 2>> /tmp/wget.log
        COUNTER=$((COUNT-1))
        sleep 5
    done
}

echo -e "\\n\\n * Starting startup script";
if [ -x /usr/bin/man-db ]; then
    echo -e " * removing man-db";
    apt-get purge -V -y man-db
fi
apt-get update
if [ ! -x /usr/bin/wget ]; then
    apt-get install -V -y wget --no-install-suggests
fi

INSTANCE_TYPE="$(fetch_metadata "http://metadata.google.internal/computeMetadata/v1/instance/attributes/instance-type")"

if [ "$INSTANCE_TYPE" = "domestic" ]; then
    WG0_CONF="$(fetch_metadata "http://metadata.google.internal/computeMetadata/v1/instance/attributes/wg0-conf")"

    apt-get install -V wireguard wireguard-tools

    echo "$WG0_CONF" > /etc/wireguard/wg0.conf

    wg-quick up wg0
fi

echo -e "\\n\\n * Finished startup script";
`,
        "wg0-conf": `[Interface]
Address = 192.168.128.1/32
PrivateKey = cM6IlDldthzWNErT3a522gm6nf6PiSLCxaCnhAERc1s=
# DNS = 192.168.128.254

PostUp = echo 1 > /proc/sys/net/ipv4/conf/%i/forwarding
PostUp = echo 1 > /proc/sys/net/ipv4/conf/ens4/forwarding
PostUp = iptables -A FORWARD -i %i -j ACCEPT; iptables -t nat -A POSTROUTING -o ens4 -j MASQUERADE

PostDown = echo 0 > /proc/sys/net/ipv4/conf/ens4/forwarding
PostDown = iptables -D FORWARD -i %i -j ACCEPT; iptables -t nat -D POSTROUTING -o ens4 -j MASQUERADE


[Peer]
PublicKey = o396GIfQDvGojkUAmZdmUdhMwPvoMqnJ3E+JT0XnjXQ=
Endpoint = aurelien.menfin.net:51820
AllowedIPs = 192.168.128.0/24, 192.168.1.0/24, 192.168.2.0/24, 192.168.3.0/24, 10.0.255.0/24
PersistentKeepalive = 25`,
    },
    name: "test2-wireguard-instance-1436674",
    networkInterfaces: [{
        accessConfigs: [{
            natIp: "34.129.216.113",
            networkTier: "PREMIUM",
        }],
        network: "https://www.googleapis.com/compute/v1/projects/pulumi-ce-team/global/networks/default",
        networkIp: "10.192.0.43",
        stackType: "IPV4_ONLY",
        subnetwork: "https://www.googleapis.com/compute/v1/projects/pulumi-ce-team/regions/australia-southeast2/subnetworks/default",
        subnetworkProject: "pulumi-ce-team",
    }],
    project: "pulumi-ce-team",
    scheduling: {
        onHostMaintenance: "MIGRATE",
        provisioningModel: "STANDARD",
    },
    zone: "australia-southeast2-a",
}, {
    protect: true,
});
const default_allow_rdp = new gcp.compute.Firewall("default-allow-rdp", {
    allows: [{
        ports: ["3389"],
        protocol: "tcp",
    }],
    description: "Allow RDP from anywhere",
    direction: "INGRESS",
    name: "default-allow-rdp",
    network: "https://www.googleapis.com/compute/v1/projects/pulumi-ce-team/global/networks/default",
    priority: 65534,
    project: "pulumi-ce-team",
    sourceRanges: ["0.0.0.0/0"],
}, {
    protect: true,
});
const aba25a55d5e684826acb4827cbed47c9 = new gcp.compute.ForwardingRule("aba25a55d5e684826acb4827cbed47c9", {
    description: "{\"kubernetes.io/service-name\":\"pulumi-codefresh/pulumi-codefresh-nginx-lb-jv2tgcpo\"}",
    ipAddress: "35.223.173.141",
    ipProtocol: "TCP",
    name: "aba25a55d5e684826acb4827cbed47c9",
    networkTier: "PREMIUM",
    portRange: "80-80",
    project: "pulumi-ce-team",
    region: "us-central1",
    target: "https://www.googleapis.com/compute/beta/projects/pulumi-ce-team/regions/us-central1/targetPools/aba25a55d5e684826acb4827cbed47c9",
}, {
    protect: true,
});
const webserver_0_1_c9a2821 = new gcp.compute.Disk("webserver-0-1-c9a2821", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-c9a2821",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const network_d3d354f = new gcp.compute.Network("network-d3d354f", {
    autoCreateSubnetworks: false,
    name: "network-d3d354f",
    project: "pulumi-ce-team",
    routingMode: "REGIONAL",
}, {
    protect: true,
});
const webserver_0_1_dac0a2a = new gcp.compute.Disk("webserver-0-1-dac0a2a", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-dac0a2a",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_dffd509 = new gcp.compute.Disk("webserver-0-1-dffd509", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-dffd509",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_f49c8b7 = new gcp.compute.Disk("webserver-0-1-f49c8b7", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-f49c8b7",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const default_allow_ssh = new gcp.compute.Firewall("default-allow-ssh", {
    allows: [{
        ports: ["22"],
        protocol: "tcp",
    }],
    description: "Allow SSH from anywhere",
    direction: "INGRESS",
    name: "default-allow-ssh",
    network: "https://www.googleapis.com/compute/v1/projects/pulumi-ce-team/global/networks/default",
    priority: 65534,
    project: "pulumi-ce-team",
    sourceRanges: ["0.0.0.0/0"],
}, {
    protect: true,
});
const test2_fw_8002b8c = new gcp.compute.Firewall("test2-fw-8002b8c", {
    allows: [{
        ports: ["22"],
        protocol: "tcp",
    }],
    direction: "INGRESS",
    name: "test2-fw-8002b8c",
    network: "https://www.googleapis.com/compute/v1/projects/pulumi-ce-team/global/networks/default",
    project: "pulumi-ce-team",
    sourceRanges: ["0.0.0.0/0"],
}, {
    protect: true,
});
const webserver_0_1_1b1f24d = new gcp.compute.Disk("webserver-0-1-1b1f24d", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-1b1f24d",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_e8161ba = new gcp.compute.Disk("webserver-0-1-e8161ba", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-e8161ba",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const default_allow_internal = new gcp.compute.Firewall("default-allow-internal", {
    allows: [
        {
            protocol: "icmp",
        },
        {
            ports: ["0-65535"],
            protocol: "tcp",
        },
        {
            ports: ["0-65535"],
            protocol: "udp",
        },
    ],
    description: "Allow internal traffic on the default network",
    direction: "INGRESS",
    name: "default-allow-internal",
    network: "https://www.googleapis.com/compute/v1/projects/pulumi-ce-team/global/networks/default",
    priority: 65534,
    project: "pulumi-ce-team",
    sourceRanges: ["10.128.0.0/9"],
}, {
    protect: true,
});
const instance_5807a0d_1 = new gcp.compute.Instance("instance-5807a0d-1", {
    bootDisk: {
        deviceName: "persistent-disk-0",
        initializeParams: {
            image: "https://www.googleapis.com/compute/beta/projects/debian-cloud/global/images/debian-11-bullseye-v20230206",
            size: 10,
            type: "pd-standard",
        },
        source: "https://www.googleapis.com/compute/v1/projects/pulumi-ce-team/zones/us-central1-a/disks/instance-5807a0d",
    },
    machineType: "f1-micro",
    metadata: {
        "startup-script": `#!/bin/bash
    echo '<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Hello, world!</title>
    </head>
    <body>
        <h1>Hello, world! 👋</h1>
        <p>Deployed with 💜 by <a href="https://pulumi.com/">Pulumi</a>.</p>
    </body>
    </html>' > index.html
    sudo python3 -m http.server 80 &`,
    },
    name: "instance-5807a0d",
    networkInterfaces: [{
        accessConfigs: [{
            natIp: "35.184.126.68",
            networkTier: "PREMIUM",
        }],
        network: "https://www.googleapis.com/compute/v1/projects/pulumi-ce-team/global/networks/network-d3d354f",
        networkIp: "10.0.1.2",
        stackType: "IPV4_ONLY",
        subnetwork: "https://www.googleapis.com/compute/v1/projects/pulumi-ce-team/regions/us-central1/subnetworks/subnet-b495e37",
        subnetworkProject: "pulumi-ce-team",
    }],
    project: "pulumi-ce-team",
    scheduling: {
        onHostMaintenance: "MIGRATE",
        provisioningModel: "STANDARD",
    },
    serviceAccount: {
        email: "438338752289-compute@developer.gserviceaccount.com",
        scopes: ["https://www.googleapis.com/auth/cloud-platform"],
    },
    tags: ["webserver"],
    zone: "us-central1-a",
}, {
    protect: true,
});
const k8s_b0ac09ee6330ed02_node = new gcp.compute.HttpHealthCheck("k8s-b0ac09ee6330ed02-node", {
    checkIntervalSec: 8,
    description: "{\"kubernetes.io/service-name\":\"k8s-b0ac09ee6330ed02-node\"}",
    healthyThreshold: 1,
    name: "k8s-b0ac09ee6330ed02-node",
    port: 10256,
    project: "pulumi-ce-team",
    requestPath: "/healthz",
    timeoutSec: 1,
    unhealthyThreshold: 3,
}, {
    protect: true,
});
const webserver_0_1_96b983e = new gcp.compute.Disk("webserver-0-1-96b983e", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-96b983e",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_770b1da = new gcp.compute.Disk("webserver-0-1-770b1da", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-770b1da",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const ac414228f9af1452d9c749260f268b7b = new gcp.compute.ForwardingRule("ac414228f9af1452d9c749260f268b7b", {
    description: "{\"kubernetes.io/service-name\":\"pulumi-codefresh/pulumi-codefresh-website-nginx\"}",
    ipAddress: "35.222.195.203",
    ipProtocol: "TCP",
    name: "ac414228f9af1452d9c749260f268b7b",
    networkTier: "PREMIUM",
    portRange: "80-80",
    project: "pulumi-ce-team",
    region: "us-central1",
    target: "https://www.googleapis.com/compute/beta/projects/pulumi-ce-team/regions/us-central1/targetPools/ac414228f9af1452d9c749260f268b7b",
}, {
    protect: true,
});
const firewall_8c24290 = new gcp.compute.Firewall("firewall-8c24290", {
    allows: [{
        ports: [
            "22",
            "80",
        ],
        protocol: "tcp",
    }],
    direction: "INGRESS",
    name: "firewall-8c24290",
    network: "https://www.googleapis.com/compute/v1/projects/pulumi-ce-team/global/networks/network-d3d354f",
    project: "pulumi-ce-team",
    sourceRanges: ["0.0.0.0/0"],
    targetTags: ["webserver"],
}, {
    protect: true,
});
const k8s_ig__6f38578513260ca4 = new gcp.compute.InstanceGroup("k8s-ig--6f38578513260ca4", {
    name: "k8s-ig--6f38578513260ca4",
    namedPorts: [{
        name: "port31553",
        port: 31553,
    }],
    network: "https://www.googleapis.com/compute/beta/projects/pulumi-ce-team/global/networks/default",
    project: "pulumi-ce-team",
    zone: "us-central1-a",
}, {
    protect: true,
});
const webserver_0_1_c866c2f = new gcp.compute.Disk("webserver-0-1-c866c2f", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-c866c2f",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const k8s_b0ac09ee6330ed02_node_http_hc = new gcp.compute.Firewall("k8s-b0ac09ee6330ed02-node-http-hc", {
    allows: [{
        ports: ["10256"],
        protocol: "tcp",
    }],
    description: "{\"kubernetes.io/cluster-id\":\"b0ac09ee6330ed02\"}",
    direction: "INGRESS",
    name: "k8s-b0ac09ee6330ed02-node-http-hc",
    network: "https://www.googleapis.com/compute/v1/projects/pulumi-ce-team/global/networks/default",
    project: "pulumi-ce-team",
    sourceRanges: [
        "209.85.204.0/22",
        "209.85.152.0/22",
        "130.211.0.0/22",
        "35.191.0.0/16",
    ],
    targetTags: ["gke-pulumi-codefresh-a232330-fb9f4492-node"],
}, {
    protect: true,
});
const webserver_0_0_fd67b0e = new gcp.compute.Disk("webserver-0-0-fd67b0e", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-0-fd67b0e",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const webserver_0_1_d0bba2d = new gcp.compute.Disk("webserver-0-1-d0bba2d", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-d0bba2d",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const subnet_b495e37 = new gcp.compute.Subnetwork("subnet-b495e37", {
    ipCidrRange: "10.0.1.0/24",
    name: "subnet-b495e37",
    network: "https://www.googleapis.com/compute/v1/projects/pulumi-ce-team/global/networks/network-d3d354f",
    privateIpv6GoogleAccess: "DISABLE_GOOGLE_ACCESS",
    project: "pulumi-ce-team",
    purpose: "PRIVATE",
    region: "us-central1",
    stackType: "IPV4_ONLY",
}, {
    protect: true,
});
const webserver_0_1_b05cee4 = new gcp.compute.Disk("webserver-0-1-b05cee4", {
    image: "https://www.googleapis.com/compute/beta/projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20220404",
    name: "webserver-0-1-b05cee4",
    physicalBlockSizeBytes: 4096,
    project: "pulumi-ce-team",
    size: 10,
    zone: "us-west2-a",
}, {
    protect: true,
});
const aba25a55d5e684826acb4827cbed47c9_1 = new gcp.compute.TargetPool("aba25a55d5e684826acb4827cbed47c9-1", {
    description: "{\"kubernetes.io/service-name\":\"pulumi-codefresh/pulumi-codefresh-nginx-lb-jv2tgcpo\"}",
    healthChecks: "https://www.googleapis.com/compute/beta/projects/pulumi-ce-team/global/httpHealthChecks/k8s-b0ac09ee6330ed02-node",
    instances: ["us-central1-a/gke-pulumi-codefresh-a23-default-pool-10b3bb09-fpwx"],
    name: "aba25a55d5e684826acb4827cbed47c9",
    project: "pulumi-ce-team",
    region: "us-central1",
}, {
    protect: true,
});
const snapshot_3 = new gcp.compute.Snapshot("snapshot-3", {
    name: "snapshot-3",
    project: "pulumi-ce-team",
    sourceDisk: "https://www.googleapis.com/compute/v1/projects/pulumi-ce-team/zones/australia-southeast2-a/disks/test2-wireguard-instance-1436674",
    storageLocations: ["australia-southeast2"],
}, {
    protect: true,
});
const snapshot_2 = new gcp.compute.Snapshot("snapshot-2", {
    name: "snapshot-2",
    project: "pulumi-ce-team",
    sourceDisk: "https://www.googleapis.com/compute/v1/projects/pulumi-ce-team/zones/australia-southeast2-a/disks/test2-wireguard-instance-1436674",
    storageLocations: ["asia"],
}, {
    protect: true,
});
const k8s_fw_ac414228f9af1452d9c749260f268b7b = new gcp.compute.Firewall("k8s-fw-ac414228f9af1452d9c749260f268b7b", {
    allows: [{
        ports: ["80"],
        protocol: "tcp",
    }],
    description: "{\"kubernetes.io/service-name\":\"pulumi-codefresh/pulumi-codefresh-website-nginx\", \"kubernetes.io/service-ip\":\"35.222.195.203\"}",
    direction: "INGRESS",
    name: "k8s-fw-ac414228f9af1452d9c749260f268b7b",
    network: "https://www.googleapis.com/compute/v1/projects/pulumi-ce-team/global/networks/default",
    project: "pulumi-ce-team",
    sourceRanges: ["0.0.0.0/0"],
    targetTags: ["gke-pulumi-codefresh-a232330-fb9f4492-node"],
}, {
    protect: true,
});
const ac414228f9af1452d9c749260f268b7b_1 = new gcp.compute.TargetPool("ac414228f9af1452d9c749260f268b7b-1", {
    description: "{\"kubernetes.io/service-name\":\"pulumi-codefresh/pulumi-codefresh-website-nginx\"}",
    healthChecks: "https://www.googleapis.com/compute/beta/projects/pulumi-ce-team/global/httpHealthChecks/k8s-b0ac09ee6330ed02-node",
    instances: ["us-central1-a/gke-pulumi-codefresh-a23-default-pool-10b3bb09-fpwx"],
    name: "ac414228f9af1452d9c749260f268b7b",
    project: "pulumi-ce-team",
    region: "us-central1",
}, {
    protect: true,
});
const demos_weekly_test = new gcp.serviceaccount.Account("demos-weekly-test", {
    accountId: "demos-weekly-test",
    description: "Used for weekly demos testing ",
    displayName: "demos_weekly_test",
    project: "pulumi-ce-team",
}, {
    protect: true,
});
const aureq_test_sa = new gcp.serviceaccount.Account("aureq-test-sa", {
    accountId: "aureq-test-sa",
    description: "This is a test service account not use for anything.",
    displayName: "aureq-test-sa",
    project: "pulumi-ce-team",
}, {
    protect: true,
});
const tushar = new gcp.serviceaccount.Account("tushar", {
    accountId: "tushar",
    description: "tushar shah team-ce gcp service account",
    displayName: "tushar",
    project: "pulumi-ce-team",
}, {
    protect: true,
});
const codefresh_ci_cd_access = new gcp.serviceaccount.Account("codefresh-ci-cd-access", {
    accountId: "codefresh-ci-cd-access",
    displayName: "Codefresh CI/CD Access",
    project: "pulumi-ce-team",
}, {
    protect: true,
});
const demo_k8s_ts_nginx_6356eb8 = new gcp.storage.Bucket("demo-k8s-ts-nginx-6356eb8", {
    location: "US",
    name: "demo-k8s-ts-nginx-6356eb8",
    project: "US",
    publicAccessPrevention: "inherited",
}, {
    protect: true,
});
const demo_k8s_ts_nginx_6356eb8_iampolicy = new gcp.storage.BucketIAMPolicy("demo-k8s-ts-nginx-6356eb8-iampolicy", {
    bucket: "b/demo-k8s-ts-nginx-6356eb8",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketReader\"}]}",
}, {
    protect: true,
});
const asia_artifacts_pulumi_ce_team_appspot_com = new gcp.storage.Bucket("asia.artifacts.pulumi-ce-team.appspot.com", {
    location: "ASIA",
    name: "asia.artifacts.pulumi-ce-team.appspot.com",
    project: "ASIA",
    publicAccessPrevention: "inherited",
}, {
    protect: true,
});
const asia_artifacts_pulumi_ce_team_appspot_com_iampolicy = new gcp.storage.BucketIAMPolicy("asia.artifacts.pulumi-ce-team.appspot.com-iampolicy", {
    bucket: "b/asia.artifacts.pulumi-ce-team.appspot.com",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketReader\"}]}",
}, {
    protect: true,
});
const gcf_sources_438338752289_us_central1 = new gcp.storage.Bucket("gcf-sources-438338752289-us-central1", {
    cors: [{
        methods: ["GET"],
        origins: [
            "https://*.cloud.google.com",
            "https://*.corp.google.com",
            "https://*.corp.google.com:*",
        ],
    }],
    location: "US-CENTRAL1",
    name: "gcf-sources-438338752289-us-central1",
    project: "US-CENTRAL1",
    publicAccessPrevention: "inherited",
    uniformBucketLevelAccess: true,
}, {
    protect: true,
});
const gcf_sources_438338752289_us_central1_iampolicy = new gcp.storage.BucketIAMPolicy("gcf-sources-438338752289-us-central1-iampolicy", {
    bucket: "b/gcf-sources-438338752289-us-central1",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketReader\"},{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectReader\"}]}",
}, {
    protect: true,
});
const gcf_sources_438338752289_us_east1 = new gcp.storage.Bucket("gcf-sources-438338752289-us-east1", {
    cors: [{
        methods: ["GET"],
        origins: [
            "https://*.cloud.google.com",
            "https://*.corp.google.com",
            "https://*.corp.google.com:*",
        ],
    }],
    location: "US-EAST1",
    name: "gcf-sources-438338752289-us-east1",
    project: "US-EAST1",
    publicAccessPrevention: "inherited",
    uniformBucketLevelAccess: true,
}, {
    protect: true,
});
const gcf_sources_438338752289_us_east1_iampolicy = new gcp.storage.BucketIAMPolicy("gcf-sources-438338752289-us-east1-iampolicy", {
    bucket: "b/gcf-sources-438338752289-us-east1",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketReader\"},{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectReader\"}]}",
}, {
    protect: true,
});
const gcf_sources_438338752289_us_east4 = new gcp.storage.Bucket("gcf-sources-438338752289-us-east4", {
    cors: [{
        methods: ["GET"],
        origins: [
            "https://*.cloud.google.com",
            "https://*.corp.google.com",
            "https://*.corp.google.com:*",
        ],
    }],
    location: "US-EAST4",
    name: "gcf-sources-438338752289-us-east4",
    project: "US-EAST4",
    publicAccessPrevention: "inherited",
    uniformBucketLevelAccess: true,
}, {
    protect: true,
});
const gcf_sources_438338752289_us_east4_iampolicy = new gcp.storage.BucketIAMPolicy("gcf-sources-438338752289-us-east4-iampolicy", {
    bucket: "b/gcf-sources-438338752289-us-east4",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketReader\"},{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectReader\"}]}",
}, {
    protect: true,
});
const artifacts_pulumi_ce_team_appspot_com = new gcp.storage.Bucket("artifacts.pulumi-ce-team.appspot.com", {
    location: "US",
    name: "artifacts.pulumi-ce-team.appspot.com",
    project: "US",
    publicAccessPrevention: "inherited",
}, {
    protect: true,
});
const artifacts_pulumi_ce_team_appspot_com_iampolicy = new gcp.storage.BucketIAMPolicy("artifacts.pulumi-ce-team.appspot.com-iampolicy", {
    bucket: "b/artifacts.pulumi-ce-team.appspot.com",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketReader\"}]}",
}, {
    protect: true,
});
const gcf_v2_sources_438338752289_europe_west1 = new gcp.storage.Bucket("gcf-v2-sources-438338752289-europe-west1", {
    cors: [{
        methods: ["GET"],
        origins: [
            "https://*.cloud.google.com",
            "https://*.corp.google.com",
            "https://*.corp.google.com:*",
            "https://*.cloud.google",
            "https://*.byoid.goog",
        ],
    }],
    lifecycleRules: [{
        action: {
            type: "Delete",
        },
        condition: {
            numNewerVersions: 3,
            withState: "ARCHIVED",
        },
    }],
    location: "EUROPE-WEST1",
    name: "gcf-v2-sources-438338752289-europe-west1",
    project: "EUROPE-WEST1",
    publicAccessPrevention: "inherited",
    uniformBucketLevelAccess: true,
    versioning: {
        enabled: true,
    },
}, {
    protect: true,
});
const gcf_v2_sources_438338752289_europe_west1_iampolicy = new gcp.storage.BucketIAMPolicy("gcf-v2-sources-438338752289-europe-west1-iampolicy", {
    bucket: "b/gcf-v2-sources-438338752289-europe-west1",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketReader\"},{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectReader\"}]}",
}, {
    protect: true,
});
const phil_cosmic_test_oauth = new gcp.storage.Bucket("phil-cosmic-test-oauth", {
    location: "US",
    name: "phil-cosmic-test-oauth",
    project: "US",
    publicAccessPrevention: "inherited",
    uniformBucketLevelAccess: true,
}, {
    protect: true,
});
const phil_cosmic_test_oauth_iampolicy = new gcp.storage.BucketIAMPolicy("phil-cosmic-test-oauth-iampolicy", {
    bucket: "b/phil-cosmic-test-oauth",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketReader\"},{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectReader\"}]}",
}, {
    protect: true,
});
const mitch_selfhosted = new gcp.storage.Bucket("mitch-selfhosted", {
    location: "US",
    name: "mitch-selfhosted",
    project: "US",
    publicAccessPrevention: "inherited",
    uniformBucketLevelAccess: true,
}, {
    protect: true,
});
const mitch_selfhosted_iampolicy = new gcp.storage.BucketIAMPolicy("mitch-selfhosted-iampolicy", {
    bucket: "b/mitch-selfhosted",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketReader\"},{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectReader\"}]}",
}, {
    protect: true,
});
const gcf_sources_438338752289_europe_west2 = new gcp.storage.Bucket("gcf-sources-438338752289-europe-west2", {
    cors: [{
        methods: ["GET"],
        origins: [
            "https://*.cloud.google.com",
            "https://*.corp.google.com",
            "https://*.corp.google.com:*",
        ],
    }],
    location: "EUROPE-WEST2",
    name: "gcf-sources-438338752289-europe-west2",
    project: "EUROPE-WEST2",
    publicAccessPrevention: "inherited",
    uniformBucketLevelAccess: true,
}, {
    protect: true,
});
const gcf_sources_438338752289_europe_west2_iampolicy = new gcp.storage.BucketIAMPolicy("gcf-sources-438338752289-europe-west2-iampolicy", {
    bucket: "b/gcf-sources-438338752289-europe-west2",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketReader\"},{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectReader\"}]}",
}, {
    protect: true,
});
const gcf_sources_438338752289_europe_west1 = new gcp.storage.Bucket("gcf-sources-438338752289-europe-west1", {
    cors: [{
        methods: ["GET"],
        origins: [
            "https://*.cloud.google.com",
            "https://*.corp.google.com",
            "https://*.corp.google.com:*",
        ],
    }],
    location: "EUROPE-WEST1",
    name: "gcf-sources-438338752289-europe-west1",
    project: "EUROPE-WEST1",
    publicAccessPrevention: "inherited",
    uniformBucketLevelAccess: true,
}, {
    protect: true,
});
const gcf_sources_438338752289_europe_west1_iampolicy = new gcp.storage.BucketIAMPolicy("gcf-sources-438338752289-europe-west1-iampolicy", {
    bucket: "b/gcf-sources-438338752289-europe-west1",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketReader\"},{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectReader\"}]}",
}, {
    protect: true,
});
const us_west2_airflow_2e495e3_fa6253b7_bucket = new gcp.storage.Bucket("us-west2-airflow-2e495e3-fa6253b7-bucket", {
    labels: {
        "goog-composer-environment": "airflow-2e495e3",
        "goog-composer-location": "us-west2",
        "goog-composer-version": "composer-1-13-3-airflow-1-10-10",
    },
    location: "US-WEST2",
    name: "us-west2-airflow-2e495e3-fa6253b7-bucket",
    project: "US-WEST2",
    publicAccessPrevention: "inherited",
}, {
    protect: true,
});
const us_west2_airflow_2e495e3_fa6253b7_bucket_iampolicy = new gcp.storage.BucketIAMPolicy("us-west2-airflow-2e495e3-fa6253b7-bucket-iampolicy", {
    bucket: "b/us-west2-airflow-2e495e3-fa6253b7-bucket",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\",\"serviceAccount:438338752289-compute@developer.gserviceaccount.com\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\",\"deleted:serviceAccount:974649983360@cloudbuild.gserviceaccount.com?uid=115491869759021673014\"],\"role\":\"roles/storage.legacyBucketReader\"},{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\",\"deleted:serviceAccount:974649983360@cloudbuild.gserviceaccount.com?uid=115491869759021673014\"],\"role\":\"roles/storage.legacyObjectReader\"}]}",
}, {
    protect: true,
});
const staging_pulumi_ce_team_appspot_com = new gcp.storage.Bucket("staging.pulumi-ce-team.appspot.com", {
    lifecycleRules: [{
        action: {
            type: "Delete",
        },
        condition: {
            age: 15,
            withState: "ANY",
        },
    }],
    location: "US",
    name: "staging.pulumi-ce-team.appspot.com",
    project: "US",
    publicAccessPrevention: "inherited",
}, {
    protect: true,
});
const staging_pulumi_ce_team_appspot_com_iampolicy = new gcp.storage.BucketIAMPolicy("staging.pulumi-ce-team.appspot.com-iampolicy", {
    bucket: "b/staging.pulumi-ce-team.appspot.com",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketReader\"}]}",
}, {
    protect: true,
});
const us_west2_airflow_5692738_c5f8c96c_bucket = new gcp.storage.Bucket("us-west2-airflow-5692738-c5f8c96c-bucket", {
    labels: {
        "goog-composer-environment": "airflow-5692738",
        "goog-composer-location": "us-west2",
        "goog-composer-version": "composer-1-13-3-airflow-1-10-10",
    },
    location: "US-WEST2",
    name: "us-west2-airflow-5692738-c5f8c96c-bucket",
    project: "US-WEST2",
    publicAccessPrevention: "inherited",
}, {
    protect: true,
});
const us_west2_airflow_5692738_c5f8c96c_bucket_iampolicy = new gcp.storage.BucketIAMPolicy("us-west2-airflow-5692738-c5f8c96c-bucket-iampolicy", {
    bucket: "b/us-west2-airflow-5692738-c5f8c96c-bucket",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\",\"serviceAccount:438338752289-compute@developer.gserviceaccount.com\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\",\"deleted:serviceAccount:1063761497976@cloudbuild.gserviceaccount.com?uid=105280519585357341221\"],\"role\":\"roles/storage.legacyBucketReader\"},{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\",\"deleted:serviceAccount:1063761497976@cloudbuild.gserviceaccount.com?uid=105280519585357341221\"],\"role\":\"roles/storage.legacyObjectReader\"}]}",
}, {
    protect: true,
});
const gcf_sources_438338752289_us_west2 = new gcp.storage.Bucket("gcf-sources-438338752289-us-west2", {
    cors: [{
        methods: ["GET"],
        origins: [
            "https://*.cloud.google.com",
            "https://*.corp.google.com",
            "https://*.corp.google.com:*",
        ],
    }],
    location: "US-WEST2",
    name: "gcf-sources-438338752289-us-west2",
    project: "US-WEST2",
    publicAccessPrevention: "inherited",
    uniformBucketLevelAccess: true,
}, {
    protect: true,
});
const gcf_sources_438338752289_us_west2_iampolicy = new gcp.storage.BucketIAMPolicy("gcf-sources-438338752289-us-west2-iampolicy", {
    bucket: "b/gcf-sources-438338752289-us-west2",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketReader\"},{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectReader\"}]}",
}, {
    protect: true,
});
const bucket_32dfc2d = new gcp.storage.Bucket("bucket-32dfc2d", {
    location: "EUROPE-WEST1",
    name: "bucket-32dfc2d",
    project: "EUROPE-WEST1",
    publicAccessPrevention: "inherited",
}, {
    protect: true,
});
const bucket_32dfc2d_iampolicy = new gcp.storage.BucketIAMPolicy("bucket-32dfc2d-iampolicy", {
    bucket: "b/bucket-32dfc2d",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketReader\"}]}",
}, {
    protect: true,
});
const mitchgerdisch_python_unit_testing_bucket_731c995 = new gcp.storage.Bucket("mitchgerdisch-python-unit-testing-bucket-731c995", {
    lifecycleRules: [{
        action: {
            type: "Delete",
        },
        condition: {
            age: 3,
            withState: "ANY",
        },
    }],
    location: "US",
    name: "mitchgerdisch-python-unit-testing-bucket-731c995",
    project: "US",
    publicAccessPrevention: "inherited",
}, {
    protect: true,
});
const mitchgerdisch_python_unit_testing_bucket_731c995_iampolicy = new gcp.storage.BucketIAMPolicy("mitchgerdisch-python-unit-testing-bucket-731c995-iampolicy", {
    bucket: "b/mitchgerdisch-python-unit-testing-bucket-731c995",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketReader\"}]}",
}, {
    protect: true,
});
const pulumi_ce_team_appspot_com = new gcp.storage.Bucket("pulumi-ce-team.appspot.com", {
    location: "US",
    name: "pulumi-ce-team.appspot.com",
    project: "US",
    publicAccessPrevention: "inherited",
}, {
    protect: true,
});
const pulumi_ce_team_appspot_com_iampolicy = new gcp.storage.BucketIAMPolicy("pulumi-ce-team.appspot.com-iampolicy", {
    bucket: "b/pulumi-ce-team.appspot.com",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketReader\"}]}",
}, {
    protect: true,
});
const eu_artifacts_pulumi_ce_team_appspot_com = new gcp.storage.Bucket("eu.artifacts.pulumi-ce-team.appspot.com", {
    location: "EU",
    name: "eu.artifacts.pulumi-ce-team.appspot.com",
    project: "EU",
    publicAccessPrevention: "inherited",
}, {
    protect: true,
});
const eu_artifacts_pulumi_ce_team_appspot_com_iampolicy = new gcp.storage.BucketIAMPolicy("eu.artifacts.pulumi-ce-team.appspot.com-iampolicy", {
    bucket: "b/eu.artifacts.pulumi-ce-team.appspot.com",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketReader\"}]}",
}, {
    protect: true,
});
const us_artifacts_pulumi_ce_team_appspot_com = new gcp.storage.Bucket("us.artifacts.pulumi-ce-team.appspot.com", {
    location: "US",
    name: "us.artifacts.pulumi-ce-team.appspot.com",
    project: "US",
    publicAccessPrevention: "inherited",
}, {
    protect: true,
});
const us_artifacts_pulumi_ce_team_appspot_com_iampolicy = new gcp.storage.BucketIAMPolicy("us.artifacts.pulumi-ce-team.appspot.com-iampolicy", {
    bucket: "b/us.artifacts.pulumi-ce-team.appspot.com",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\"],\"role\":\"roles/storage.legacyBucketReader\"}]}",
}, {
    protect: true,
});
const us_west2_airflow_bf5db84_87f2014c_bucket = new gcp.storage.Bucket("us-west2-airflow-bf5db84-87f2014c-bucket", {
    labels: {
        "goog-composer-environment": "airflow-bf5db84",
        "goog-composer-location": "us-west2",
        "goog-composer-version": "composer-1-13-3-airflow-1-10-10",
    },
    location: "US-WEST2",
    name: "us-west2-airflow-bf5db84-87f2014c-bucket",
    project: "US-WEST2",
    publicAccessPrevention: "inherited",
}, {
    protect: true,
});
const us_west2_airflow_bf5db84_87f2014c_bucket_iampolicy = new gcp.storage.BucketIAMPolicy("us-west2-airflow-bf5db84-87f2014c-bucket-iampolicy", {
    bucket: "b/us-west2-airflow-bf5db84-87f2014c-bucket",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\",\"serviceAccount:438338752289-compute@developer.gserviceaccount.com\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\",\"deleted:serviceAccount:123001221667@cloudbuild.gserviceaccount.com?uid=116623595765938827157\"],\"role\":\"roles/storage.legacyBucketReader\"},{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\",\"deleted:serviceAccount:123001221667@cloudbuild.gserviceaccount.com?uid=116623595765938827157\"],\"role\":\"roles/storage.legacyObjectReader\"}]}",
}, {
    protect: true,
});
const us_west2_airflow_3be5969_c0e88aad_bucket = new gcp.storage.Bucket("us-west2-airflow-3be5969-c0e88aad-bucket", {
    labels: {
        "goog-composer-environment": "airflow-3be5969",
        "goog-composer-location": "us-west2",
        "goog-composer-version": "composer-1-13-3-airflow-1-10-10",
    },
    location: "US-WEST2",
    name: "us-west2-airflow-3be5969-c0e88aad-bucket",
    project: "US-WEST2",
    publicAccessPrevention: "inherited",
}, {
    protect: true,
});
const us_west2_airflow_3be5969_c0e88aad_bucket_iampolicy = new gcp.storage.BucketIAMPolicy("us-west2-airflow-3be5969-c0e88aad-bucket-iampolicy", {
    bucket: "b/us-west2-airflow-3be5969-c0e88aad-bucket",
    policyData: "{\"bindings\":[{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\",\"serviceAccount:438338752289-compute@developer.gserviceaccount.com\"],\"role\":\"roles/storage.legacyBucketOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\",\"deleted:serviceAccount:503975504059@cloudbuild.gserviceaccount.com?uid=109071902030406703685\"],\"role\":\"roles/storage.legacyBucketReader\"},{\"members\":[\"projectEditor:pulumi-ce-team\",\"projectOwner:pulumi-ce-team\"],\"role\":\"roles/storage.legacyObjectOwner\"},{\"members\":[\"projectViewer:pulumi-ce-team\",\"deleted:serviceAccount:503975504059@cloudbuild.gserviceaccount.com?uid=109071902030406703685\"],\"role\":\"roles/storage.legacyObjectReader\"}]}",
}, {
    protect: true,
});
