<template>
  <v-footer padless >
    <v-card color="primary" class="flex" flat tile>
      <v-card-title class="secondaryMedium">
        <strong class="subheading white--text">Portafolio </strong>
        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon.name" class="mx-4" dark icon
        @click="abrirVentana(icon.url)">
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Sergio Sánchez López</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: 'MyFooter',
  data: () => ({
    icons: [
      {
        name: 'github',
        icon: 'mdi-github',
        url: 'https://github.com/zergiales',
      },
      {
        name: 'linkedin',
        icon: 'mdi-linkedin',
        url: 'https://www.linkedin.com/in/sergio-s%C3%A1nchez-8b5711162/',
      },
    ],
  }),
  methods: {
    abrirVentana(parametro) {
      window.open(parametro);
    },
  },
};
</script>
<style>@import '../assets/css/style.css';</style>
