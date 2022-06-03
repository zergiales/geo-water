<template>
  <v-card class="mx-auto tweet" color="indigo" dark>
    <v-card-title>
      <v-icon large left> mdi-toilet</v-icon>
      <span class="text-h6">Reseñas</span>
    </v-card-title>

    <v-card-text class="">
      "Cuando era pequeñito me cagaba en la fregona."
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class=""
            alt=""
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Sergio Sanchez</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">
            mdi-heart
          </v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">
            mdi-share-variant
          </v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    reseña: [
      {
        titulo: 'Baño de la Concordia',
        descripcion: 'Un baño con muchas agujas',
        autor: 'Sergio Sanchez',
      },
    ],
  }),
};
</script>
<style scoped>
  .tweet{
    width: 100%;
  }
</style>
