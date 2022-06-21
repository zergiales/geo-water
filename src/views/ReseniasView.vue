<template>
  <v-main>
    <SideBar></SideBar>
    <v-container grid-list-xs>
      <v-row>
        <v-col lg="6" md="6" class="text-center fade-scroll d-flex justify-center">
          <div>
            <lottie-player class="animation-reverse" src="https://assets1.lottiefiles.com/packages/lf20_8zeefdig.json"
              background="transparent" speed="0.75"
              style="width: 100%; height: 100%" autoplay></lottie-player>
          </div>
        </v-col>
        <v-col cols="12" lg="6" md="6"
        class="text-center fade-scroll d-flex justify-center align-center">
          <div class="titulo">
            <h1>Reseñas</h1>
            <h2>Aquí podrás publicar y ver tus reseñas</h2>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <ResFormComponent></ResFormComponent>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h1>Últimas reseñas por la comunidad</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <ReseniasComponent></ReseniasComponent>
        </v-col>
      </v-row>
      <!--<v-row>
        <v-col cols="6" sm="6">
          <v-textarea counter label="Text" :rules="rules" :value="value"></v-textarea>
        </v-col>
      </v-row>-->
    </v-container>
    <footer class="pt-9">
      <FooterComponent></FooterComponent>
    </footer>
  </v-main>
</template>
<script>
import ReseniasComponent from '@/components/ReseniasComponent.vue';
import ResFormComponent from '@/components/ResFormComp.vue';
import SideBar from '@/components/SideBar.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {
    SideBar,
    ResFormComponent,
    ReseniasComponent,
    FooterComponent,
  },

};
</script>
<style scoped>
@import '../assets/css/style.css';
</style>
