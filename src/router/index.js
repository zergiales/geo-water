import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/LoginView.vue';
import Registro from '../views/RegistroView.vue';
import Menu from '../views/HomeView.vue';
import Reseñas from '../views/ReseñasView.vue';
import Ajustes from '../views/AjustesView.vue';
import Baños from '../views/BañosView.vue';
import Usuarios from '../view/Usiarios.vue';

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
    path: '/reseñas',
    name: 'reseñas',
    component: Reseñas,
  },
  {
    path: '/ajustes',
    name: 'ajustes',
    component: Ajustes,
  },
    {
    path: '/baños',
    name: 'baños',
    component: Baños,
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: Usuarios,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
