<!--lo organizamos todo en unaunica vista-->
<template>
  <div>
    <SideBar></SideBar>
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <MapaComponent></MapaComponent>
        </v-col>
        <v-col cols="6">
          <ReseñasComponent></ReseñasComponent>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue';
import MapaComponent from '@/components/MapaComponent.vue';
import ReseñasComponent from '@/components/ReseñasComponent.vue';

export default {
  components: {
    SideBar,
    MapaComponent,
    ReseñasComponent,
  },
};
</script>
<style>@import '../assets/css/style.css';</style>
