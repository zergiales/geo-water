<!--lo organizamos todo en una unica vista-->
<template>
  <div>
    <SideBar></SideBar>
    <v-container fluid>
      <v-row>
        <v-col xl="12" lg="12" md="12" sm="12"
        class="text-center fade-scroll d-flex justify-center">
            <div>
                <h1>Parece que te has equivocado...</h1>
                <h2>Prueba otra ruta a ver que pasa</h2>
            </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col xl="12" lg="12" md="12" sm="12"
        class="text-center fade-scroll d-flex justify-center">
            <div>
                <lottie-player
                class="animation-reversetext-center fade-scroll d-flex justify-center"
                src="https://assets2.lottiefiles.com/packages/lf20_bhw1ul4g.json"
                background="transparent" speed="0.5"
                style="width: 90%; height: 90%" loop autoplay>
                </lottie-player>
            </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col xl="12" lg="12" md="12" sm="12">
            <div class="contenedor1 elevation-4 white--text">
                <h1>¿Por qué me ha saltado esta página?</h1>
                <p>
                    Esta página te ha aparecido porque te has equivocado al escribir.<br />
                    A continuación  podrá ver las vistas si pulsa en algún boton de los del menu.
                </p>
            </div>
        </v-col>
      </v-row>
    </v-container>
    <footer class="pt-9">
      <FooterComponent></FooterComponent>
    </footer>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import axios from 'axios';

export default {
  components: {
    SideBar,
    FooterComponent,
  },
  setup: {
    async getUser() {
      const response = await axios.post(
        `${process.env.VUE_APP_SERVER_TOTAL_PATH}/login`,
        {
          email: this.email,
          contraseña: this.password,
        },
      );
      console.log(response);
      console.log(`${process.env.VUE_APP_SERVER_TOTAL_PATH}/login`);
    },
  },
};
</script>
<style scooped>
@import '../assets/css/style.css';
.contenedor1{
    margin-left: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 3em;
    background:linear-gradient(135deg, rgb(29, 145, 183) 30%, #7660f2 60%);
    height: 80%;
    width: 90%;
    border-radius: 5px;
    text-align: justify;
    padding: 1em;
}
</style>
