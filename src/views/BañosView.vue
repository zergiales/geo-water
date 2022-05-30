<template>
  <div>
    <SideBar></SideBar>
    <v-container grid-list-xs>
      <v-row>
        <v-col cols="12" lg="6" md="6" class="text-center fade-scroll d-flex justify-center">
          <div>
            <lottie-player class="animation-reverse" src="https://assets5.lottiefiles.com/packages/lf20_kjnwk4pv.json"
              background="transparent" speed="0.5"
              style="width: 100%; height: 100%" loop autoplay></lottie-player>
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
    </v-container>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue';

export default {
  components: {
    SideBar,
  },
};
</script>
<style>@import '../assets/css/style.css';</style>
