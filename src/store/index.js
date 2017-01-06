import Vue from 'vue';
import Vuex from 'vuex';

import MockMeApi from './modules/mockme-api';
import Authentication from './modules/authentication';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    api: MockMeApi,
    authentication: Authentication,
  },
});
