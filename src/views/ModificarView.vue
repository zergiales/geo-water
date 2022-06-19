<template>
  <div>
    <SideBar></SideBar>
    <v-container grid-list-xs>
      <v-row>
        <v-col lg="6" md="6" xs="12" sm="12" class="text-center fade-scroll d-flex justify-center">
          <div>
            <lottie-player class="animation-reverse text-center fade-scroll d-flex justify-center" src="https://assets2.lottiefiles.com/packages/lf20_ab0pxvgc.json"
              background="transparent" speed="0.75"
              style="width: 100%; height: 100%" autoplay loop></lottie-player>
          </div>
        </v-col>
        <v-col lg="6" md="6"
        class="text-center fade-scroll d-flex justify-center align-center">
          <div class="titulo">
              <h1>Bienvenido Super usuario</h1>
              <h3>En este menu podrás modificar los datos</h3>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="12"  class="text-center fade-scroll d-flex justify-center">
          <div>
              <h1>¿Qué desea hacer?</h1>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <!--tabla-->
      </v-row>
      <footer class="pt-9">
      <FooterComponent></FooterComponent>
    </footer>
    </v-container>
  </div>
</template>
