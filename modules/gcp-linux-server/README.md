## GCP Manifest - Linux Server
A simple manifest to create a Linux VM in GCP.

### Required Env Variables
- `vm_name` - The VM name that will be displayed in the dashboard
- `vm_description` - Descriptive text for this VM
- `vm_ssh_keys` - Array of JSON objects to add as users, e.g. `[{user: username, key: 'public key'}]`
- `vm_image` - The VM's image
- `vm_type` - Machine type
### Optional Env Variables
- `vm_rdmp_oid` - The RDMP record associated with this workspace
- `vm_workspace_oid` - The Workspace ID
### Outputs
- `remote_public_ip` - The public IP address
