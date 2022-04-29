import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeMaster from '../views/HomeMaster.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeMaster,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
