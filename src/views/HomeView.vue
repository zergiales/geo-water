<!--lo organizamos todo en una unica vista-->
<template>
  <div>
    <SideBar></SideBar>
    <v-row>
      <v-col cols="12">
        <UserComponent></UserComponent>
      </v-col>
    </v-row>
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
    <footer class="pt-9">
      <FooterComponent></FooterComponent>
    </footer>
    </v-container>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue';
import MapaComponent from '@/components/MapaComponent.vue';
import InfoComponent from '@/components/InfoComponent.vue';
import UserComponent from '@/components/UserComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {
    SideBar,
    MapaComponent,
    InfoComponent,
    UserComponent,
    FooterComponent,
  },
};
</script>
<style>@import '../assets/css/style.css';</style>
