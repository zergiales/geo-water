<template>
  <div>
    <SideBar></SideBar>
    <v-row>
      <v-col cols="12">
        <UserComponent></UserComponent>
      </v-col>
    </v-row>
    <v-container grid-list-xs>
      <v-row>
        <v-col cols="12" lg="6" md="6" class="text-center fade-scroll d-flex justify-center">
          <div>
            <lottie-player class="animation-reverse text-center fade-scroll d-flex justify-center" src="https://assets5.lottiefiles.com/datafiles/1muIJcITVpLzjzp/data.json"
              background="transparent" speed="0.75"
              style="width: 500px; height: 100%" autoplay loop></lottie-player>
          </div>
        </v-col>
        <v-col cols="12" lg="6" md="6"
        class="text-center fade-scroll d-flex justify-center align-center">
          <div class="titulo">
            <h1>Ajustes</h1>
            <h2>Personalizar tu lugar de <br>
             desde aqui</h2>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue';
import UserComponent from '@/components/UserComponent.vue';

export default {
  components: {
    SideBar,
    UserComponent,
  },
};
</script>
<style>@import '../assets/css/style.css';</style>
