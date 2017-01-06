export default {
  name: 'items',
  methods: {
    logout() {
      console.log('logout');
      this.$store.dispatch('logout')
        .then(this.$router.push('/login'), console.log('unable to logout'));
    },
  },
};
