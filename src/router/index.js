/* donde se encuentra todas las rutas de cada vista que se muestra en la app */
import Vue from 'vue';
import VueRouter from 'vue-router';
/* ruta de inicio y registro  */
import Login from '../views/LoginView.vue';
import Registro from '../views/RegistroView.vue';
import Home from '../views/HomeView.vue';
import resenias from '../views/ReseniasView.vue';
import Ajustes from '../views/AjustesView.vue';
import baños from '../views/BañosView.vue';
import Usuario from '../views/UserView.vue';
import Eliminar from '../views/EliminarView.vue';
import Busqueda from '../views/BusquedaView.vue';
import Modificar from '../views/ModificarView.vue';

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
    name: 'Home',
    component: Home,
  },
  {
    path: '/resenias',
    name: 'resenias',
    component: resenias,
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
  /* vistas para eliminar usuarios */
  {
    path: '/usuario/eliminar',
    name: 'eliminar',
    component: Eliminar,
  },
  /* vista para buscar usuarios */
  {
    path: '/usuario/busqueda',
    name: 'busqueda',
    component: Busqueda,
  },
  /* vista para modificar los usuarios */
  {
    path: '/usuario/modificar',
    name: 'Modificar',
    component: Modificar,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
