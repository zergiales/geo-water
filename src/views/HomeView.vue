<!--lo organizamos todo en unaunica vista-->
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
        <v-col cols-lg="6" cols-md="12">
          <MapaComponent></MapaComponent>
        </v-col>
        <v-col cols-lg="6" cols-md="12">
          <InfoComponent></InfoComponent>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols-lg="6" cols-md="12">
          <ReseñasComponent></ReseñasComponent>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue';
import MapaComponent from '@/components/MapaComponent.vue';
import ReseñasComponent from '@/components/ReseniasComponent.vue';
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
