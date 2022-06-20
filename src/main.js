import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  Vuelidate,
  store,
  render: (h) => h(App),
}).$mount('#app');
