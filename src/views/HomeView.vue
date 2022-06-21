<template>
  <div>
    <SideBar></SideBar>
    <v-container fluid>
    <v-row>
      <v-col xl="12" lg="12" md="12" sm="12">
        <h1  class="text-center fade-scroll d-flex justify-center align-center efecto">
        Bienvenido &nbsp;{{ this.$store.getters.nombreUsuario }} a Geo Water</h1>
      </v-col>
    </v-row>
      <v-row>
        <v-col xl="6" lg="6" md="12" sm="12">
          <MapaComponent></MapaComponent>
        </v-col>
        <!-- meter un menu circular con el que interactuar y poder
         cambiar los botones del mapa de arriba cuando sea posible TODOOO -->
        <v-col xl="6" lg="6" md="12" sm="12">
          <InfoComponent></InfoComponent>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h1 class="text-center fade-scroll d-flex justify-center align-center">
          Baños cerca de tu localización</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col xl="12" lg="12" md="6" sm="12">
          <tarjetas-component></tarjetas-component>
        </v-col>
      </v-row>
    </v-container>
    <footer class="pt-9">
      <FooterComponent></FooterComponent>
    </footer>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue';
import MapaComponent from '@/components/MapaComponent.vue';
import InfoComponent from '@/components/InfoComponent.vue';
import TarjetasComponent from '@/components/TarjetasComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {
    SideBar,
    MapaComponent,
    InfoComponent,
    TarjetasComponent,
    FooterComponent,
  },
};
</script>
<style>@import '../assets/css/style.css';</style>
