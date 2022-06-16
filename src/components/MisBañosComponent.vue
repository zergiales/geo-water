<!--componente que contiene los baños que el usuario ha insertado en la tabla de baños-->
<template>
  <v-row dense>
    <v-col v-for="item in items" :key="item">
      <v-card class="mx-auto" max-width="344">
        <v-img src='/assets/img/fondos/barajas.png' :name="item.descripcion" height="200px"></v-img>
        <v-card-title v-text="item.title"></v-card-title>
        <v-card-subtitle v-text="item.distancia"></v-card-subtitle>
        <v-card-actions>
          <v-btn color="indigo lighten-2" text @click="show = !show"  >
            Saber más
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show" >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text v-text="item.descripcion"></v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    show: false,
    /* to do: la idea es pillar todo desde back y pasarlo a front en un array de objetos */
    items: [
      {
        imagen: '@/assets/img/fondos/barajas.jpg',
        title: 'Baño Salud',
        distancia: '20 km cerca de ti',
        descripcion: 'especial para minusvalidos',
      },
      {
        imagen: '@/assets/img/fondos/barajas.jpg',
        title: 'Baño quebradilla',
        distancia: '790 m cerca de ti',
        descripcion: 'cerrado a las 12',
      },
    ],
  }),
};
</script>
