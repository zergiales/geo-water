<template>
  <div>
    <SideBar></SideBar>
    <v-container grid-list-xs>
      <v-row>
        <v-col lg="6" md="6" xs="12" sm="12" class="text-center fade-scroll d-flex justify-center">
          <div>
            <lottie-player class="animation-reverse text-center fade-scroll d-flex justify-center" src="https://assets2.lottiefiles.com/packages/lf20_ab0pxvgc.json"
              background="transparent" speed="0.75"
              style="width: 100%; height: 100%" autoplay loop></lottie-player>
          </div>
        </v-col>
        <v-col lg="6" md="6"
        class="text-center fade-scroll d-flex justify-center align-center">
          <div class="titulo">
              <h1>Bienvenido Super usuario</h1>
              <h3>En este menu podrás realizar funcionalidades de superusuario</h3>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="item in items" :key="item"
         lg="4" xl="4" md="6" sm="12" class="align-center justify-content-center white--text">
          <div class="cont con1">
            <div class="box box1">
              <div class="front">
                <div class="txt1" v-text="item.titulo"></div>
                <div class="line"></div>
                <div class="txt2" v-text="item.descripcion1"></div>
              </div>
              <div class="back">
                <div class="txt3" v-text="item.descripcion2"></div>
              <v-btn color="green">
              <a class="white--text px-4 botones"
              v-text="item.boton" color="green" v-bind:href="item.url">
              item.boton</a>
              </v-btn>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      <footer class="pt-9">
      <FooterComponent></FooterComponent>
    </footer>
    </v-container>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {
    SideBar,
    FooterComponent,
  },
  data: () => ({
    show: false,
    items: [
      {
        titulo: 'Eliminar',
        descripcion1: 'baños reseñas o usuarios',
        descripcion2: 'Busca al usuario o el baño que quieras y eliminalo',
        url: '/Usuario/eliminar',
        boton: 'Eliminar',
      },
      {
        titulo: 'Busqueda',
        descripcion1: 'Realiza una busqueda en las bases de datos',
        descripcion2: 'accede a los datos de las bases de usuario,baños y reseñas',
        url: '/Usuario/busqueda',
        boton: 'Realizar busqueda',
      },
      {
        titulo: 'Modificar',
        descripcion1: 'Modifica los permisos y los datos',
        descripcion2: 'Realiza una busqueda y cambia.Aqui solo podras editar cosas que se ven en front',
        url: '/Usuario/modificar',
        boton: 'Modificar',
      },
    ],
  }),
};
</script>
<style>
@import '../assets/css/style.css';
.botones{
  text-decoration:none;
}
</style>
