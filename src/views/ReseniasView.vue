<template>
  <div>
    <SideBar></SideBar>
    <v-container grid-list-xs>
      <v-row>
        <v-col cols="6" class="text-center fade-scroll d-flex justify-center">
          <div>
            <lottie-player
              class="animation-reverse"
              src="https://assets1.lottiefiles.com/packages/lf20_8zeefdig.json"
              background="transparent"
              speed="0.75"
              style="width: 100%; height: 100%"
              autoplay
            ></lottie-player>
          </div>
        </v-col>
        <v-cols
          cols="6"
          class="text-center fade-scroll d-flex justify-center align-center"
        >
          <div class="titulo">
            <h1>Reseñas</h1>
            <h2>Aquí podrás publicar y ver tus reseñas</h2>
          </div>
        </v-cols>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="row align-items-center justify-content-center px-4 mb-5">
            <div class="col-lg-6 col-md-12 col-sm-12 fade-scroll">
              <div class="cont con1">
                <div class="box box1">
                  <div class="front">
                    <div class="txt1">Editar reseñas</div>
                    <div class="line"></div>
                    <div class="txt2">mira tus ultimas aportaciones</div>
                  </div>
                  <div class="back">
                    <div class="txt3">
                      GA Pass holders may visit the GA camping areas.
                    </div>
                    <a href="#" class="read">buy</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 fade-scroll">
              <div class="cont cont2">
                <div class="box box2">
                  <div class="front">
                    <div class="txt1">Hacer reseña</div>
                    <div class="line"></div>
                    <div class="txt2">saca tu lado critico</div>
                  </div>
                  <div class="back">
                    <div class="txt3">
                      GA Pass holders may visit the GA camping areas.
                    </div>
                    <a href="#" class="read">buy</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h1>Últimas reseñas</h1>
          <ReseniasComponent></ReseniasComponent>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="6">
          <v-textarea
            counter
            label="Text"
            :rules="rules"
            :value="value"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue';
import ReseniasComponent from '@/components/ReseniasComponent.vue';

export default {
  components: {
    SideBar,
    ReseniasComponent,
  },
  data: () => ({
    rules: [(v) => v.length <= 140 || 'Maximo 140 caracteres'],
    value: 'Informa a los usuarios sobre tu experiencia',
  }),
};
</script>
<style>
@import "../assets/css/style.css";
</style>
