module.exports.workflow = {
  "terraform-gcp-linux": {
    "terraform-gcp-linux-draft": {
      config: {
        workflow: {
          stage: 'draft',
          stageLabel: 'Draft',
        },
        authorization: {
          viewRoles: ['Admin', 'Librarians'],
          editRoles: ['Admin', 'Librarians']
        },
        form: 'terraform-gcp-linux-1.0-draft'
      },
      starting: true
    },
    "terraform-gcp-linux-provisioning": {
      config: {
        workflow: {
          stage: 'provisioning',
          stageLabel: 'Provisioning',
        },
        authorization: {
          viewRoles: ['Admin', 'Librarians'],
          editRoles: ['Admin', 'Librarians']
        },
        form: 'terraform-gcp-linux-1.0-provisioning'
      }
    },
    "terraform-gcp-linux-provisioned": {
      config: {
        workflow: {
          stage: 'provisioned',
          stageLabel: 'Provisioned',
        },
        authorization: {
          viewRoles: ['Admin', 'Librarians'],
          editRoles: ['Admin', 'Librarians']
        },
        form: 'terraform-gcp-linux-1.0-provisioned'
      }
    }
  },
  "terraform-gcp-omeka": {
    "terraform-gcp-omeka-draft": {
      config: {
        workflow: {
          stage: 'draft',
          stageLabel: 'Draft',
        },
        authorization: {
          viewRoles: ['Admin', 'Librarians'],
          editRoles: ['Admin', 'Librarians']
        },
        form: 'terraform-gcp-omeka-1.0-draft'
      },
      starting: true
    },
    "terraform-gcp-omeka-provisioning": {
      config: {
        workflow: {
          stage: 'provisioning',
          stageLabel: 'Provisioning',
        },
        authorization: {
          viewRoles: ['Admin', 'Librarians'],
          editRoles: ['Admin', 'Librarians']
        },
        form: 'terraform-gcp-omeka-1.0-provisioning'
      }
    },
    "terraform-gcp-omeka-provisioned": {
      config: {
        workflow: {
          stage: 'provisioned',
          stageLabel: 'Provisioned',
        },
        authorization: {
          viewRoles: ['Admin', 'Librarians'],
          editRoles: ['Admin', 'Librarians']
        },
        form: 'terraform-gcp-omeka-1.0-provisioned'
      }
    }
  }
};
