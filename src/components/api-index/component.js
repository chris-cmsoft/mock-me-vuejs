export default {
  name: 'api-index',
  data() {
    return {
      loading: true,
      paginationObject: {}
    };
  },
  computed: {
    // a computed getter
    apis: function () {
      // `this` points to the vm instance
      return this.paginationObject.data;
    },
    currentPage: function () {
      return this.paginationObject.current_page;
    },
    hasManyPages: function () {
      return this.paginationObject.last_page > 1;
    },
    pageCountText: function () {
      return `Showing page ${this.currentPage} of ${this.paginationObject.last_page}`;
    },
    itemCountText: function () {
      return `${this.paginationObject.from} - ${this.paginationObject.to} of ${this.paginationObject.total}`;
    },
  },
  beforeCreate() {
    this.loading = true;
    this.$store.dispatch('getApis').then((response) => {
      this.paginationObject = response.data;
      this.loading = false;
    });
  },
  methods: {
    nextPage() {
      if(this.currentPage < this.paginationObject.last_page) {
        this.loading = true;
        this.$store.dispatch('getApis', {page: this.currentPage + 1})
          .then((response) => {
            this.paginationObject = response.data;
            this.loading = false;
          });
      }

    },
    previousPage() {
      if(this.currentPage > 1) {
        this.loading = true;
        this.$store.dispatch('getApis', {page: this.currentPage - 1})
          .then((response) => {
            this.paginationObject = response.data;
            this.loading = false;
          });
      }
    },
  },
};
