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
        <v-col xl="6" lg="6" md="6"
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
        <v-col xl="12" lg="12" md="12" sm="12">
          <div class="contenedor2 elevation-4 white--text">
                <h3>Crea una reseña que toda la comunidad lo vea</h3>
                <p>
                   El mundo esta constantemente evolucionando y necesita ideas frescas<br />
                   Por eso ha nacido geo Water, para llevar acabo su misión, hacer de el mundo <br/>
                   un lugar más limpio
                </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h1>Últimas reseñas por la comunidad</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <ReseniasComponent></ReseniasComponent>
        </v-col>
      </v-row>
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
.contenedor2{
    margin-left: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 3em;
    background-color: #3F51B5 ;
    height: 80%;
    width: 90%;
    border-radius: 5px;
    text-align: justify;
    padding: 1em;
}
</style>
