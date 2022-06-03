<template>
  <div>
    <SideBar></SideBar>
    <v-container grid-list-xs>
      <v-row>
        <v-col cols="12" lg="6" md="6" class="text-center fade-scroll d-flex justify-center">
          <div>
            <lottie-player class="animation-reversetext-center fade-scroll d-flex justify-center"
            src="https://assets5.lottiefiles.com/packages/lf20_kjnwk4pv.json"
              background="transparent" speed="0.5"
              style="width: 90%; height: 90%" loop autoplay></lottie-player>
          </div>
        </v-col>
        <v-col cols="12" lg="6" md="6"
        class="text-center fade-scroll d-flex justify-center align-center">
          <div class="titulo">
            <h1>Baños</h1>
            <h2>Colabora para que la comunidad sea cada vez más grande</h2>
          </div>
        </v-col>
      </v-row>
      <v-row class="fondoBaño">
        <v-col cols="6">
          <RegistrarBanio></RegistrarBanio>
        </v-col>
        <v-cols></v-cols>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue';
import RegistrarBanio from '@/components/RegistrarBanio.vue';

export default {
  components: {
    SideBar,
    RegistrarBanio,
  },
};
</script>
<style>
  @import '../assets/css/style.css';
  @import '../assets/css/baños.css';
</style>
