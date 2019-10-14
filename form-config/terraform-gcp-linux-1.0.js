
const commonFields =  [
  {
    class: 'Container',
    compClass: 'TextBlockComponent',
    definition: {
      name: 'header-title',
      value: '@hook-tf-gcp-linux-title',
      type: 'h2'
    }
  },
  {
    class: 'Container',
    compClass: 'TextBlockComponent',
    definition: {
      name: 'header-description',
      value: '@hook-tf-gcp-linux-description',
      type: 'h4'
    }
  },
  {
    class: "ParameterRetriever",
    compClass: 'ParameterRetrieverComponent',
    editOnly: true,
    definition: {
      name: 'parameterRetriever',
      parameterName:'rdmp'
    }
  },
  {
    class: 'RecordMetadataRetriever',
    compClass: 'RecordMetadataRetrieverComponent',
    editOnly: true,
    definition: {
      name: 'rdmpGetter',
      subscribe: {
        'parameterRetriever': {
          onValueUpdate: [{
            action: 'publishMetadata'
          }]
        }
      }
    }
  },
  {
    class: 'HiddenValue',
    definition: {
      name: 'rdmpOid',
      subscribe: {
        'rdmpGetter': {
          onValueUpdate: [
            {
              action: 'utilityService.getPropertyFromObject',
              field: 'oid'
            }
          ]
        }
      }
    }
  },
  {
    class: 'HiddenValue',
    definition: {
      name: 'rdmpTitle',
      subscribe: {
        'rdmpGetter': {
          onValueUpdate: [
            {
              action: 'utilityService.getPropertyFromObject',
              field: 'title'
            }
          ]
        }
      }
    }
  },
  {
    class: 'HiddenValue',
    definition: {
      name: 'type',
      value: '@hook-tf-gcp-linux-title'
    }
  },
  {
    class: 'TextField',
    definition: {
      name: 'title',
      label: '@hook-tf-gcp-linux-workspace-name',
      required: true
    }
  },
  {
    class: 'TextArea',
    compClass: 'TextAreaComponent',
    editOnly: true,
    definition: {
      name: 'description',
      label: '@hook-tf-gcp-linux-label-description',
      rows: 10,
      cols: 10,
      required: false
    }
  },
  {
    class: 'TextField',
    definition: {
      name: 'user',
      label: '@hook-tf-gcp-linux-ssh-username',
      required: true
    }
  },
  {
    class: 'TextArea',
    compClass: 'TextAreaComponent',
    editOnly: true,
    definition: {
      name: 'key',
      label: '@hook-tf-gcp-linux-ssh-key',
      rows: 10,
      cols: 10,
      required: true
    }
  }
];

const draftFields = commonFields.slice(0);
draftFields.push({
  class: 'SaveButton',
  compClass: 'SaveButtonComponent',
  definition: {
    label: "@hook-tf-gcp-linux-create-workspace",
    targetStep: 'provisioning',
    closeOnSave: true,
    redirectLocation: '/@branding/@portal/record/edit/@rdmp?focusTabId=workspaces'
  },
  variableSubstitutionFields: ['redirectLocation']
});

// TODO: change to read only fields later
const readOnlyFields = commonFields.slice(0);

module.exports.form = {
  forms: {
    "terraform-gcp-linux-1.0-draft": {
      name: "terraform-gcp-linux-1.0-draft",
      type: "terraform-gcp-linux",
      skipValidationOnSave: true,
      editCssClasses: 'row col-md-12',
      viewCssClasses: 'row col-md-offset-1 col-md-10',
      messages: {
        "saving": ["@dmpt-form-saving"],
        "validationFail": ["@dmpt-form-validation-fail-prefix", "@dmpt-form-validation-fail-suffix"],
        "saveSuccess": ["@dmpt-form-save-success"],
        "saveError": ["@dmpt-form-save-error"]
      },
      fields: draftFields
    },
    "terraform-gcp-linux-1.0-provisioning": {
      name: "terraform-gcp-linux-1.0-provisioning",
      type: "terraform-gcp-linux",
      skipValidationOnSave: true,
      editCssClasses: 'row col-md-12',
      viewCssClasses: 'row col-md-offset-1 col-md-10',
      messages: {
        "saving": ["@dmpt-form-saving"],
        "validationFail": ["@dmpt-form-validation-fail-prefix", "@dmpt-form-validation-fail-suffix"],
        "saveSuccess": ["@dmpt-form-save-success"],
        "saveError": ["@dmpt-form-save-error"]
      },
      fields: readOnlyFields
    },
    "terraform-gcp-linux-1.0-provisioned": {
      name: "terraform-gcp-linux-1.0-provisioned",
      type: "terraform-gcp-linux",
      skipValidationOnSave: true,
      editCssClasses: 'row col-md-12',
      viewCssClasses: 'row col-md-offset-1 col-md-10',
      messages: {
        "saving": ["@dmpt-form-saving"],
        "validationFail": ["@dmpt-form-validation-fail-prefix", "@dmpt-form-validation-fail-suffix"],
        "saveSuccess": ["@dmpt-form-save-success"],
        "saveError": ["@dmpt-form-save-error"]
      },
      fields: readOnlyFields
    }
  }
};
