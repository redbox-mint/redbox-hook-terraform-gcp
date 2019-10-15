#####################################################################
## Omeka Server in Google Cloud - Terragrunt Configuration
##
## This module is part of ReDBox's Terraform Google Cloud Workspace Provisioner
##
## Author: <a href='https://github.com/shilob' target='_blank'>Shilo Banihit</a>
#####################################################################
terraform {
  source = "../../../../redbox-hook-terraform-gcp/modules//gcp-linux-server"
}

# Include all settings from the root terragrunt.hcl file
include {
  path = find_in_parent_folders()
}

// inputs = {
//   // vm_name = "test-vm-instance"
//   // vm_type = "f1-micro"
//   // vm_image = "centos-cloud/centos-7"
// }
