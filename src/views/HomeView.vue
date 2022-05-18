<!--lo organizamos todo en unaunica vista-->
<template>
  <div>
    <v-container fluid>
    <Mapa></Mapa>
    </v-container>
  </div>
</template>
<script>
import Mapa from '../components/MapaComponent.vue';

export default {
  components: {
    Mapa,
  },
};
</script>
<style>@import '../assets/css/style.css';</style>
