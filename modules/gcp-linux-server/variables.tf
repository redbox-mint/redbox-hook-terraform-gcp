#####################################################################
## Omeka Server in Google Cloud - Module Variables
##
## Author: <a href='https://github.com/shilob' target='_blank'>Shilo Banihit</a>
#####################################################################
variable "gcp_project_id" {
  description = "GC Project ID"
  type        = string
}

variable "gcp_region_name" {
  description = "GC Region Name"
  type        = string
  default     = "australia-southeast1"
}

variable "gcp_zone_name" {
  description = "GC Zone Name"
  type        = string
  default     = "australia-southeast1-b"
}

variable "vm_name" {
  description = "Name of the VM instance"
  type        = string
}

variable "vm_type" {
  description = "VM type of the instance"
  type        = string
}

variable "vm_image" {
  description = "VM image for this instance"
  type        = string
}

variable "vm_ssh_keys" {
  description = "List of maps of users to add to this instance"

  type = list(object({
    user = string
    key = string
  }))

}

variable "vm_description" {
  description = "Description of this VM."
  type = string
}

variable "vm_rdmp_oid" {
  description = "The RDMP OID for this workspace."
  type = string
}

variable "vm_workspace_oid" {
  description = "The OID for this workspace."
  type = string
}
