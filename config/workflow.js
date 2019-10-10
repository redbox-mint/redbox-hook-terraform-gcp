module.exports.workflow = {
  "terraform-gcp-linux": {
    "draft": {
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
    }
  },
  "terraform-gcp-omeka": {
    "draft": {
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
    }
  }
};
