import { AUTH_LOGIN_REDIRECT } from 'src/config';

export default {
  name: 'login',
  data() {
    return {
      username: {
        value: '',
        errors: [],
      },
      password: {
        value: '',
        errors: [],
      },
      globalErrors: [],
    };
  },
  methods: {
    login() {
      this.loading = true;
      this.$store.dispatch('login', { username: this.username.value, password: this.password.value }).then(() => {
        this.$router.push(AUTH_LOGIN_REDIRECT);
      }, (response) => {
        this.username.errors = [];
        this.password.errors = [];
        this.globalErrors = [];
        if(response.status === 400) {
          if(response.data.hasOwnProperty('username')) {
            this.username.errors = response.body.username;
            this.username.groupClass = 'has-error';
          }
          if(response.data.hasOwnProperty('password')) {
            this.password.errors = response.body.password;
            this.password.groupClass = 'has-error';
          }
          if(response.data.hasOwnProperty('non_field_errors')) {
            this.globalErrors = response.body.non_field_errors;
          }
        }
      });
    },
  },
};
