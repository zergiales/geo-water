import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id_usuario: '',
    nombre: '',
    tipo: '',
  },
  getters: {
    idUsuario: (state) => state.id_usuario,
    nombreUsuario: (state) => state.nombre,
    tipoUsuario: (state) => state.tipo,
  },
  mutations: {
    mutActId(state, obj) {
      this.state.id_usuario = obj;
    },
    mutActNombre(state, obj) {
      this.state.nombre = obj;
    },
    mutActTipo(state, obj) {
      this.state.tipo = obj;
    },
  },
  actions: {
    actualizarIdAction({ commit }, obj) {
      commit('mutActId', obj);
    },
    actualizarNombreAction({ commit }, obj) {
      commit('mutActNombre', obj);
    },
    actualizarTipoAction({ commit }, obj) {
      commit('mutActTipo', obj);
    },
  },
  modules: {
  },
});
