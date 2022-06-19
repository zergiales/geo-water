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
        <v-col xl="6" lg="6" md="12" sm="12">
          <RegistrarBanio></RegistrarBanio>
        </v-col>
        <v-col xl="6" lg="6" md="12" sm="12">
          <v-card>
            <h3 class="text-center indigo--text">¿Qúe tengo que hacer para insertar un baño?</h3>
            <div class="text-center fade-scroll d-flex justify-center align-center">
              <p class="text--center">Si donde te encuentras , existe un baño que cumpla
              los requisitos establecidos podrá insertarse a nuestra base de datos.
              <br>rellene el formulario y acontinuacion si se ha rellenado todos los campos
              estará registrado
              </p>
              <img src="@/assets/img/logos/Logo.2.png" alt=""
               width="40%" height="40%" class="pa-5">
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col xl="12" lg="12" md="12" sm="12">
          <h1 class="titulillo" color="indigo ">Mis útimos baños insertados</h1>
          <!--to do: sacar los baños que ha insertado el usuario -->
          <MisBañosComponent></MisBañosComponent>
        </v-col>
      </v-row>
      <footer class="pt-9">
      <FooterComponent></FooterComponent>
    </footer>
    </v-container>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue';
import RegistrarBanio from '@/components/RegistrarBanio.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import MisBañosComponent from '@/components/MisBañosComponent.vue';

export default {
  components: {
    SideBar,
    RegistrarBanio,
    MisBañosComponent,
    FooterComponent,
  },
};
</script>
<styl,
    MisBañosComponente>
  @import '../assets/css/style.css';
  @import '../assets/css/baños.css';
</style>
