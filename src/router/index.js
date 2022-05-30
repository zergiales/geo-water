import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/LoginView.vue';
import Registro from '../views/RegistroView.vue';
import Menu from '../views/HomeView.vue';
import resenias from '../views/ReseniasView.vue';
import Ajustes from '../views/AjustesView.vue';
import baños from '../views/BañosView.vue';
import Usuario from '../views/UserView.vue';
import FormularioRes from '../views/FormularioRes.vue';
import MisReseñas from '../views/MisReseñas.vue';

Vue.use(VueRouter);
// main component
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/registro',
    name: 'register',
    component: Registro,
  },
  {
    path: '/home',
    name: 'menu',
    component: Menu,
  },
  {
    path: '/resenias',
    name: 'resenias',
    component: resenias,
  },
  {
    path: '/resenias/FormularioRes',
    name: 'FormularioRes',
    component: FormularioRes,
  },
  {
    path: '/resenias/MisResenias',
    name: 'MisResenias',
    component: MisReseñas,
  },
  {
    path: '/ajustes',
    name: 'ajustes',
    component: Ajustes,
  },
  {
    path: '/banios',
    name: 'baños',
    component: baños,
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: Usuario,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
