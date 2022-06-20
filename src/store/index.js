import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: 'nombre de usuario',
    user: {

    },
  },
  getters: {
  },
  mutations: {
    CargarLogin(state, obj) {
      this.state.user = obj;
    },
  },
  actions: {
    actLogin({ commit }, obj) {
      commit('mutLogin', obj);
    },
  },
  modules: {
  },
});
