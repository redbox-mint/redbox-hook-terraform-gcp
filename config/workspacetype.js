// TODO: move all text config to language files
module.exports.workspacetype = {
  'terraform-gcp-linux': {
    name: 'terraform-gcp-linux',
    label: 'Google Cloud - CeNTOS 7 Linux Workspace',
    subtitle: 'Google Cloud - CeNTOS 7 Linux via Terraform Provisioner',
    description: 'Provision a f1-micro CeNTOS 7 VM workspace in Google Cloud.',
    logo: '/images/GCP-Linux.png',
    defaultLocation: '@hook-tf-gcp-linux-workspace-default-location',
    // TF/TG config
    terragrunt_base: '/opt/redbox-portal/node_modules/@researchdatabox/redbox-hook-terraform-gcp/live/',
    // Note, other variables are too sensitive/risky to be placed in a config file
    // Please inject these via environment variables. See README.
    vm_type: 'f1-micro',
    vm_image: 'centos-cloud/centos-7',
    service: 'TfGcpService',
    // optionally, you can set the default user/admin creds, in the form: {user: 'username', key: 'public key'}
    // vm_admin_credentials: {user: '', key: ''},
    postProvisionState: 'provisioned'
  }
  ,
  'terraform-gcp-omeka': {
    name: 'terraform-gcp-omeka',
    label: 'Google Cloud - Omeka',
    subtitle: 'Google Cloud - Omeka via Terraform Provisioner',
    description: 'Provision an Omeka workspace in Google Cloud.',
    logo: '/images/GCP-Omeka.png',
    defaultLocation: '@hook-tf-gcp-omeka-workspace-default-location',
    // TF/TG config
    terragrunt_base: '/opt/redbox-portal/node_modules/@researchdatabox/redbox-hook-terraform-gcp/live/',
    // Note, other variables are too sensitive/risky to be placed in a config file
    // Please inject these via environment variables. See README.
    vm_type: 'f1-micro',
    vm_image: 'uow-centos7-omeka-1-0-0',
    service: 'TfGcpService',
    // optionally, you can set the default user/admin creds, in the form: {user: 'username', key: 'public key'}
    // vm_admin_credentials: {user: '', key: ''},
    postProvisionState: 'provisioned'
  }
};
