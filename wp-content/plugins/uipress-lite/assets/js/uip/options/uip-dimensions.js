const { __, _x, _n, _nx } = wp.i18n;
export function moduleData() {
  return {
    props: {
      returnData: Function,
      value: Object,
    },
    inject: ['uipress'],
    data: function () {
      return {
        option: {
          width: {
            value: '',
            units: '%',
          },
          height: {
            value: '',
            units: '%',
          },
          maxWidth: {
            value: '',
            units: '%',
          },
          maxHeight: {
            value: '',
            units: '%',
          },
          minWidth: {
            value: '',
            units: '%',
          },
          minHeight: {
            value: '',
            units: '%',
          },
        },
        strings: {
          height: __('Height', 'uipress-light'),
          width: __('Width', 'uipress-light'),
          maxHeight: __('Max', 'uipress-light'),
          maxWidth: __('Max', 'uipress-light'),
          minHeight: __('Min', 'uipress-light'),
          minWidth: __('Min', 'uipress-light'),
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
    mounted: function () {
      this.formatInput(this.value);
    },
    computed: {
      returnOption() {
        return this.option;
      },
    },
    methods: {
      formatInput(value) {
        this.uipress.assignBlockValues(this.option, value);
      },
    },
    template:
      '<div class="uip-flex uip-flex-column uip-row-gap-xs">\
        <div class="uip-grid-col-3">\
          <div class="">\
            <div class="uip-text-s uip-text-muted uip-margin-bottom-xxs uip-flex-grow">{{strings.height}}</div>\
            <value-units :value="returnOption.height" :returnData="function(data) {option.height = data}"></value-units>\
          </div>\
          <div class="">\
            <div class="uip-text-s uip-text-muted uip-margin-bottom-xxs uip-flex-grow">{{strings.minHeight}}</div>\
            <value-units :value="returnOption.minHeight" :returnData="function(data) {option.minHeight = data}"></value-units>\
          </div>\
          <div class="">\
            <div class="uip-text-s uip-text-muted uip-margin-bottom-xxs uip-flex-grow">{{strings.maxHeight}}</div>\
            <value-units :value="returnOption.maxHeight" :returnData="function(data) {option.maxHeight = data}"></value-units>\
          </div>\
          <div class="">\
            <div class="uip-text-s uip-text-muted uip-margin-bottom-xxs uip-flex-grow">{{strings.width}}</div>\
            <value-units :value="returnOption.width" :returnData="function(data) {option.width = data}"></value-units>\
          </div>\
          <div class="">\
            <div class="uip-text-s uip-text-muted uip-margin-bottom-xxs uip-flex-grow">{{strings.minWidth}}</div>\
            <value-units :value="returnOption.minWidth" :returnData="function(data) {option.minWidth = data}"></value-units>\
          </div>\
          <div class="">\
            <div class="uip-text-s uip-text-muted uip-margin-bottom-xxs uip-flex-grow">{{strings.maxWidth}}</div>\
            <value-units :value="returnOption.maxWidth" :returnData="function(data) {option.maxWidth = data}"></value-units>\
          </div>\
        </div>\
      </div>',
  };
}
