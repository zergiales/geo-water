<template>
  <v-row justify="center">
    <v-expansion-panels popout>
      <v-expansion-panel v-for="(item, i) in 5" :key="i">
        <v-expansion-panel-header>Opciones</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    listado: [
      {
        titulo: 'Baño de la Concordia',
        descripcion: 'Un baño con muchas agujas',
        funcion: '',
      },
      {
        titulo: 'Baño de la Concordia',
        descripcion: 'Un baño con muchas agujas',
        funcion: '',
      },
      {
        titulo: 'Baño de la Concordia',
        descripcion: 'Un baño con muchas agujas',
        funcion: '',
      },
      {
        titulo: 'Baño de la Concordia',
        descripcion: 'Un baño con muchas agujas',
        funcion: '',
      },
    ],
  }),
};
</script>

<style></style>
