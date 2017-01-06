export default {
  name: 'spinner',
  props: {
    active: {
      type: Boolean,
      required: true,
    },
    size: {
      type: String,
      default: 'md',
    },
    theme: {
      type: String,
      default: 'dark',
    },
  },
  computed: {
    themeClass: function() {
        return this.theme;
    },
  }
};
