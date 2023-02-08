# Terraform RedBox Hook Provisioner Module: Google Cloud

This is a dependent module for [ReDBox's](https://www.redboxresearchdata.com.au) [Terraform provisioner hook](https://github.com/redbox-mint/redbox-hook-terraform).  

## Responsibilities

- Provide manifests to provision resources into Google Cloud

## Requirements

- Service account with access as "Owner". Set path to the creds JSON in `GOOGLE_APPLICATION_CREDENTIALS` env var. See this [for more info](https://registry.terraform.io/providers/hashicorp/google/latest/docs/guides/getting_started#adding-credentials).
- Bucket for Terraform state with [versioning enabled](https://cloud.google.com/storage/docs/gsutil/commands/versioning). If you opt to store state somewhere else, modify the manifests. Make sure the account used above has owner/write access to the bucket. See more info below.
- If you require Terraform state encryption, set the `GOOGLE_ENCRYPTION_KEY` variable. See this [for more info](https://cloud.google.com/storage/docs/encryption/customer-supplied-keys).
- Set the env var `TF_VAR_gcp_project_id` to the target GCP project ID.
- Set the env var `TG_BUCKET_NAME` to the target GCS bucket for storing the state. The module assumes the bucket already exists and the account used has write access to this bucket.
