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
          <h1 class="titulillo" color="indigo ">Mis útimos baños insertados</h1>
          <!--to do: sacar los baños que ha insertado el usuario -->
          <MisBañosComponent></MisBañosComponent>
        </v-col>
      </v-row>
      <v-row>
      <h1 color="indigo">Baños cerca de tu localización</h1>
      </v-row>
      <v-row>
        <v-col cols="12">
          <tarjetas-component></tarjetas-component>
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
import TarjetasComponent from '@/components/TarjetasComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import MisBañosComponent from '@/components/MisBañosComponent.vue';

export default {
  components: {
    SideBar,
    RegistrarBanio,
    TarjetasComponent,
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
