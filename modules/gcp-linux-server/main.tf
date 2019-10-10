################################################################
## Terraform ReDBox Provisioner - GCP Linux Server
##
## A simple module to create a Linux VM instance
##
## Author: <a href='https://github.com/shilob' target='_blank'>Shilo Banihit</a>
################################################################
terraform {
  # The configuration for this backend will be filled in by Terragrunt
  backend "gcs" {}

  # The latest version of Terragrunt (v0.19.0 and above) requires Terraform 0.12.0 or above.
  required_version = ">= 0.12.0"
}

provider "google" {
  project = "${var.gcp_project_id}"
  region  = "${var.gcp_region_name}"
  zone    = "${var.gcp_zone_name}"
}

resource "google_compute_instance" "linux_instance" {
  name         = "${var.vm_name}"
  machine_type = "${var.vm_type}"
  description = "${var.vm_description}"

  metadata = {
    ssh-keys = join("\n", [for keypair in var.vm_ssh_keys :  "${keypair.user}: ${keypair.key}" ])
    rdmp_oid = "${var.vm_rdmp_oid}"
    workspace_oid = "${var.vm_workspace_oid}"
  }

  boot_disk {
    initialize_params {
      image = "${var.vm_image}"
    }
  }

  network_interface {
    # A default network is created for all GCP projects
    network = "default"
    access_config {
    }
  }

  # network_interface {
  #   # A default network is created for all GCP projects
  #   network       = "${google_compute_network.vpc_network.self_link}"
  #   access_config {
  #   }
  # }
}
