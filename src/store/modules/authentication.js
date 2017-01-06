import Vue from 'vue';
import { AUTH_LOGIN_URI } from 'src/config';

export default {
  actions: {
    login: (state, credentials) => new Promise((resolve, reject) => {
      Vue.http.post(AUTH_LOGIN_URI, credentials)
        .then(
          (data) => {
            sessionStorage.setItem('token', data.data.token);
            resolve();
          },
          data => reject(data)
        );
    }),
    logout: () => new Promise((resolve) => {
      sessionStorage.clear();
      resolve();
    }),
    isLoggedIn: () => new Promise((resolve, reject) => {
      if (sessionStorage.getItem('token')) {
        resolve();
      } else {
        reject();
      }
    }),
    getAuthHeaders: ({ dispatch }) => new Promise((resolve) => {
      let headers = {};
      dispatch('isLoggedIn')
        .then(() => {
          const token = sessionStorage.getItem('token');
          headers = {
            Authorization: `Token ${token}`,
          };
          resolve(headers);
        }, () => {
          resolve({});
        });
    }),
  },
};
