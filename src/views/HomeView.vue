<!--lo organizamos todo en unaunica vista-->
<template>
  <div>
    <v-container>
      <SideBar></SideBar>
      <div fluid>
        <MapaComponent></MapaComponent>
      </div>
    </v-container>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue';
import MapaComponent from '@/components/MapaComponent.vue';

export default {
  components: {
    SideBar,
    MapaComponent,
  },
};
</script>
<style>@import '../assets/css/style.css';</style>
