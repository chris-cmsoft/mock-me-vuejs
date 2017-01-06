import Vue from 'vue';
import { MOCKME_BASE_URI } from 'src/config';

export default {
  actions: {
    getApis: () => new Promise((resolve, reject) => {
      Vue.http.get(`${MOCKME_BASE_URI}/apis`)
        .then(
          (data) => {
            resolve(data);
          },
          data => reject(data)
        );
    }),
  },
};
