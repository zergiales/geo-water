import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeMaster from '../views/HomeMaster.vue';
import Registro from '../views/RegistroView.vue';

Vue.use(VueRouter);
// main component
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeMaster,
  },
  {
    path: '/registro',
    name: 'register',
    component: Registro,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
