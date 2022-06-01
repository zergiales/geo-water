<template>
  <v-card max-width="80%" height="100%" class="mx-auto">
    <v-app-bar color="indigo">
      <v-toolbar-title class="white--text ">Estadisticas</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card :color="item.color" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5" v-text="item.title"></v-card-title>

                <v-card-title v-text="item.number" class="numeros"></v-card-title>
              </div>
            </div>
            <div></div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        color: '#64AEFF',
        title: 'Baños localizados',
        number: '3',
      },
      {
        color: '#6488FF',
        title: 'Reseñas insertados',
        number: '5',
      },
      {
        color: '#2E3A82',
        title: 'Usuarios registrados',
        number: '3',
      },
    ],
  }),
};
</script>
<style>
.numeros{
  font-weight: bolder;
  font-size: 15;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
