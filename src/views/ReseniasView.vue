<template>
  <div>
    <SideBar></SideBar>
    <v-container grid-list-xs>
      <v-row>
        <v-col cols="12" lg="6" md="6" class="text-center fade-scroll d-flex justify-center">
          <div>
            <lottie-player class="animation-reverse" src="https://assets1.lottiefiles.com/packages/lf20_8zeefdig.json"
              background="transparent" speed="0.75"
              style="width: 100%; height: 100%" autoplay></lottie-player>
          </div>
        </v-col>
        <v-cols cols="12" lg="6" md="6"
        class="text-center fade-scroll d-flex justify-center align-center">
          <div class="titulo">
            <h1>Reseñas</h1>
            <h2>Aquí podrás publicar y ver tus reseñas</h2>
          </div>
        </v-cols>
      </v-row>
      <v-row>
        <v-col cols="12" lg="6" xl="6" class="align-center justify-content-center white--text">
          <div class="cont con1">
            <div class="box box1">
              <div class="front">
                <div class="txt1">Mis reseñas</div>
                <div class="line"></div>
                <div class="txt2">mira tus ultimas aportaciones</div>
              </div>
              <div class="back">
                <div class="txt3">
                  Mira que puntuacion te pone el resto de personas
                </div>
                <v-btn>Siguiente</v-btn>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="6" xl="6" class="align-center justify-content-center white--text">
          <div class="cont cont2">
            <div class="box box2">
              <div class="front">
                <div class="txt1">Hacer reseña</div>
                <div class="line"></div>
                <div class="txt2">saca tu lado critico</div>
              </div>
              <div class="back">
                <div class="txt3">
                  Ayuda a la comunidad a crecer
                </div>
                <v-btn>Siguiente</v-btn>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h1>Reseñas de baños de tu alrededor</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <ReseniasComponent></ReseniasComponent>
        </v-col>
      </v-row>
      <!--<v-row>
        <v-col cols="6" sm="6">
          <v-textarea counter label="Text" :rules="rules" :value="value"></v-textarea>
        </v-col>
      </v-row>-->
    <footer class="pt-9">
      <FooterComponent></FooterComponent>
    </footer>
    </v-container>
  </div>
</template>
<script>
import ReseniasComponent from '@/components/ReseniasComponent.vue';
import SideBar from '@/components/SideBar.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {
    SideBar,
    ReseniasComponent,
    FooterComponent,
  },
  data: () => ({
    rules: [(v) => v.length <= 140 || 'Maximo 140 caracteres'],
    value: 'Informa a los usuarios sobre tu experiencia',
  }),
};
</script>
