<template>
  <div id="home">
    <v-row>
      <v-col cols="6" class="text-center fade-scroll  d-flex justify-center">
        <div>
          <lottie-player
            class="animation-reverse"
            src="https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json"
            background="transparent"
            speed="0.75"
            style="width: 100%; height: 100%"
            loop
            autoplay
          ></lottie-player>
        </div>
      </v-col>
      <v-col cols="6" class="text-center fade-scroll white--text">
        <div class="contenedor1 elevation-4">
          <h1>Hello world! </h1>
          <p><strong>I´m Sergio</strong></p>
          <p>
              Soy desarrollador de aplicaciones web orientado tanto a la parte de
              FrontEnd como de Backend.<br />
            <br />
            A continuación  podrás ver todos los proyectos personales que he llevado a cabo,
            y las tecnologías utilizadas para su desarrollo.<br />
            Para saber más pulse el boton
          </p>
          <v-btn color="secondaryLight" large outlined class="btnC"
            >About me</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'MyHome',
  component: {},

};
</script>
