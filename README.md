# pulumi-import-google-cloud-account-scraper

Proof of concept for bulk import of Google Cloud resources into Pulumi.

- `sample-infra` contains a Pulumi project that generates resources for import. (If your Google Cloud project already has a number of resources, you don't need to run this program.)
- `import-target` is the Pulumi project to which the resources should be imported.

- <https://cloud.google.com/config-connector/docs/how-to/import-export/bulk-export>

```bash
pulumi stack rm dev --force -y || \
  pulumi stack init dev && \
  pulumi config set gcp:project pulumi-ce-team && \
  pulumi import -f ../config-connector-transform/pulumi-import.json -y -s dev
```

```bash
pulumi stack rm dev --force -y
```
