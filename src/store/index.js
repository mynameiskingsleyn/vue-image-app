import Vuex from 'Vuex';
import Vue from 'Vue';
import auth from './modules/auth';

Vue.use(Vuex); // enables vue.js to talk with Vuex because it is not only ment for vue.

export default new Vuex.Store({
  modules: {
    auth
  }
})
