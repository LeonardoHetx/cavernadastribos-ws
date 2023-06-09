const { __, _x, _n, _nx } = wp.i18n;
export function moduleData() {
  return {
    props: {
      returnData: Function,
      value: Object,
    },
    data: function () {
      return {
        option: this.value,
        submitOptions: [
          {
            label: __('Email', 'uipress-lite'),
            name: 'email',
          },
          {
            label: __('Save as site option', 'uipress-lite'),
            name: 'siteOption',
          },
          {
            label: __('Save as user meta', 'uipress-lite'),
            name: 'userMeta',
          },
          {
            label: __('Send to PHP function', 'uipress-lite'),
            name: 'phpFunction',
          },
        ],
        userMetaOptions: [
          {
            label: __('Individual keys', 'uipress-lite'),
            name: 'single',
          },
          {
            label: __('Group object', 'uipress-lite'),
            name: 'object',
          },
        ],
        strings: {
          pixels: __('Pixels', 'uipress-lite'),
          submitType: __('Submit type', 'uipress-lite'),
          functionName: __('PHP function name', 'uipress-lite'),
          siteOptionName: __('Site option name', 'uipress-lite'),
          recipientEmail: __('Recipient email', 'uipress-lite'),
          emailSubject: __('Email subject', 'uipress-lite'),
          emailTemplate: __('Email template', 'uipress-lite'),
          templateDescription: __('Use form values in the email template by using {{input_name}}', 'uipress-lite'),
          siteOptionDescription: __(
            "The form data will be saved as an object to your database using the function update_site_option(). You will then be able to access your data using the function get_site_option('your_option_key')",
            'uipress-lite'
          ),
          saveAs: __('Save as', 'uipress-lite'),
          metaKey: __('Meta key', 'uipress-lite'),
          redirectAfterSubmission: __('Redirect URL after submission', 'uipress-lite'),
        },
      };
    },
    watch: {
      option: {
        handler(newValue, oldValue) {
          this.returnData(this.option);
        },
        deep: true,
      },
    },
    methods: {},
    template:
      '<div class="uip-flex uip-flex-column uip-row-gap-xs">\
        <!--Submit type -->\
        <div>\
          <div class="uip-text-muted uip-margin-bottom-xxs">{{strings.submitType}}</div>\
          <div>\
            <select class="uip-input uip-padding-top-xxxs uip-padding-bottom-xxxs" v-model="option.action">\
              <template v-for="action in submitOptions">\
                <option :value="action.name">{{action.label}}</option>\
              </template>\
            </select>\
          </div>\
        </div>\
        <!--PHP function name-->\
        <div v-if="option.action == \'phpFunction\'" class="uip-scale-in-top">\
          <div class="uip-text-muted uip-margin-bottom-xxs">{{strings.functionName}}</div>\
          <div>\
            <input type="text" class="uip-input" v-model="option.phpFunction">\
          </div>\
        </div>\
        <!--User meta-->\
        <div v-if="option.action == \'userMeta\'" class="uip-scale-in-top">\
          <div class="uip-text-muted uip-margin-bottom-xxs">{{strings.saveAs}}</div>\
          <div class="uip-margin-bottom-xs">\
            <select class="uip-input uip-padding-top-xxxs uip-padding-bottom-xxxs" v-model="option.objectOrSingle">\
              <template v-for="action in userMetaOptions">\
                <option :value="action.name">{{action.label}}</option>\
              </template>\
            </select>\
          </div>\
          <template v-if="option.objectOrSingle == \'object\'">\
            <div class="uip-text-muted uip-margin-bottom-xxs">{{strings.metaKey}}</div>\
            <div class="uip-margin-bottom-xs">\
              <uip-input :value="option.userMetaObjectKey" :returnData="function(e){option.userMetaObjectKey = e}" :args="{metaKey: true}"></uip-input>\
            </div>\
          </template>\
        </div>\
        <!--Site option name-->\
        <div v-if="option.action == \'siteOption\'" class="uip-scale-in-top">\
          <div class="uip-text-muted uip-margin-bottom-xxs">{{strings.siteOptionName}}</div>\
          <div class="uip-margin-bottom-xs">\
            <uip-input :value="option.siteOptionName" :returnData="function(e){option.siteOptionName = e}" :args="{metaKey: true}"></uip-input>\
          </div>\
          <div class="uip-text-muted uip-text-s">{{strings.siteOptionDescription}}</div>\
        </div>\
        <!--Email options-->\
        <template v-if="option.action == \'email\'">\
          <div class="uip-scale-in-top">\
            <div class="uip-text-muted uip-margin-bottom-xxs">{{strings.recipientEmail}}</div>\
            <div>\
              <input type="email" class="uip-input" v-model="option.emailAddress">\
            </div>\
          </div>\
          <div class="uip-scale-in-top">\
            <div class="uip-text-muted uip-margin-bottom-xxs">{{strings.emailSubject}}</div>\
            <div>\
              <input type="text" class="uip-input" v-model="option.emailSubject">\
            </div>\
          </div>\
          <div class="uip-scale-in-top">\
            <div class="uip-text-muted uip-margin-bottom-xxs">{{strings.emailTemplate}}</div>\
            <div class="uip-margin-bottom-xs">\
              <uip-paragraph-input :value="option.emailTemplate" :returnData="function(e) {option.emailTemplate = e}"></uip-paragraph-input>\
            </div>\
            <div class="uip-text-muted uip-text-s">{{strings.templateDescription}}</div>\
          </div>\
        </template>\
        <!--Redirect option-->\
        <div class="uip-scale-in-top">\
          <div class="uip-text-muted uip-margin-bottom-xxs">{{strings.redirectAfterSubmission}}</div>\
          <div class="uip-margin-bottom-xs">\
            <link-select :value="option.redirectURL" :returnData="function(e){option.redirectURL = e}" ></link-select>\
          </div>\
        </div>\
      </div>',
  };
}
