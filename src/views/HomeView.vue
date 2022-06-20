<!--lo organizamos todo en una unica vista-->
<template>
  <div>
    <SideBar></SideBar>
    <div> {{ $store.state.msg }}</div>
    <v-container fluid>
      <v-row>
        <v-col xl="6" lg="6" md="12" sm="12">
          <MapaComponent></MapaComponent>
        </v-col>
        <!-- meter un menu circular con el que interactuar y poder
         cambiar los botones del mapa de arriba cuando sea posible TODOOO -->
        <v-col lg="6" md="12">
          <InfoComponent></InfoComponent>
        </v-col>
      </v-row>
      <v-row>
        <h1 class="pl-5">Baños cerca de tu localización</h1>
        <v-col cols="12">
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
import axios from 'axios';

export default {
  components: {
    SideBar,
    MapaComponent,
    InfoComponent,
    TarjetasComponent,
    FooterComponent,
  },
  setup: {
    async getUser() {
      const response = await axios.post(
        `${process.env.VUE_APP_SERVER_TOTAL_PATH}/login`,
        {
          email: this.email,
          contraseña: this.password,
        },
      );
      console.log(response);
      console.log(`${process.env.VUE_APP_SERVER_TOTAL_PATH}/login`);
    },
  },
};
</script>
<style>@import '../assets/css/style.css';</style>
