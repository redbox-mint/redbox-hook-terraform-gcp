module.exports.form = {
  forms: {
    "terraform-gcp-omeka-1.0-draft": {
      name: "terraform-gcp-omeka-1.0",
      type: "terraform-gcp-omeka",
      skipValidationOnSave: true,
      editCssClasses: 'row col-md-12',
      viewCssClasses: 'row col-md-offset-1 col-md-10',
      messages: {
        "saving": ["@dmpt-form-saving"],
        "validationFail": ["@dmpt-form-validation-fail-prefix", "@dmpt-form-validation-fail-suffix"],
        "saveSuccess": ["@dmpt-form-save-success"],
        "saveError": ["@dmpt-form-save-error"]
      },
      fields: [
        {
          class: 'Container',
          compClass: 'TextBlockComponent',
          viewOnly: false,
          definition: {
            name: 'title',
            value: '@hook-tf-gcp-omeka-title',
            type: 'h2'
          }
        },
        {
          class: 'Container',
          compClass: 'TextBlockComponent',
          viewOnly: false,
          definition: {
            name: 'description',
            value: '@hook-tf-gcp-omeka-description',
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
          class: 'TextField',
          definition: {
            name: 'workspaceName',
            label: '@hook-tf-gcp-omeka-workspace-name',
            required: true
          }
        },
        {
          class: 'TextArea',
          compClass: 'TextAreaComponent',
          editOnly: true,
          definition: {
            name: 'description',
            label: '@hook-tf-gcp-omeka-label-description',
            rows: 10,
            cols: 10,
            required: false
          }
        },
        {
          class: 'SaveButton',
          compClass: 'SaveButtonComponent',
          definition: {
            label: "@hook-tf-gcp-omeka-create-workspace",
            targetStep: 'creating',
            redirectLocation: '/@branding/@portal/record/edit/@oid'
          }
        }
      ]
    }
  }
};
