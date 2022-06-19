<template>
  <div>
    <SideBar></SideBar>
    <v-container grid-list-xs>
      <v-row>

        <v-col xl="12" lg="12" md="12" sm="12"
        class="text-center fade-scroll d-flex justify-center align-center">
          <div class="titulo">
              <h1>Modificar Datos</h1>
              <h3>Realiza una busqueda de la tabla que quieras y elimina</h3>
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
  }),
};
</script>
<style>
@import '../assets/css/style.css';
</style>
