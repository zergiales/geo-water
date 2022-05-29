<template>
  <div>
    <SideBar></SideBar>
    <v-container grid-list-xs>
      <v-row>
        <v-col cols="6" class="text-center fade-scroll d-flex justify-center">
          <div>
            Si eres Usuario admin, podras entrar a modificar las funcionalidades
            de los usuarios,vas poder pasar la actividad de los uausrios de activo a inactivo
            <!--to do:
            Hacer un primer contenedor donde salga una animacion de lottier, -->

          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue';

export default {
  components: {
    SideBar,
  },
};
</script>
<style>@import '../assets/css/style.css';</style>
