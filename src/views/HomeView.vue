<!--lo organizamos todo en unaunica vista-->
<template>
  <div>
    <SideBar></SideBar>
    <UserComponent></UserComponent>
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <MapaComponent></MapaComponent>
        </v-col>
        <v-col cols="6">
          <InfoComponent></InfoComponent>
        </v-col>
      </v-row>
      <v-row>
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
import InfoComponent from '@/components/InfoComponent.vue';
import UserComponent from '@/components/UserComponent.vue';

export default {
  components: {
    SideBar,
    MapaComponent,
    InfoComponent,
    ReseñasComponent,
    UserComponent,
  },
};
</script>
<style>@import '../assets/css/style.css';</style>
