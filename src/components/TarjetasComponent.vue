<!--tarjetas para mostrar los baños de la comindad en home y en el apartado de baños-->
<template>
  <v-row dense>
    <v-col v-for="item in items" :key="item" cols="4">
      <v-card class="mx-auto" max-width="344">
        <v-img :src='item.imagen' :name="item.descripcion" height="200px"></v-img>
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
import { require } from 'vuelidate/lib/validators';

export default {
  data: () => ({
    show: false,
    items: [
      {
        imagen: require('@/assets/img/fondos/barajas.jpg'),
        title: 'Baño Salud',
        distancia: '20 km cerca de ti',
        descripcion: 'especial para minusvalidos',
      },
      {
        imagen: require('@/assets/img/fondos/fondo.png'),
        title: 'Baño quebradilla',
        distancia: '790 m cerca de ti',
        descripcion: 'cerrado a las 12',
      },
      {
        imagen: require('@/assets/img/fondos/barajas.jpg'),
        title: 'Baño biblioteca',
        distancia: '5 km cerca de ti',
        descripcion: 'perfecto',
      },
    ],
  }),
};
</script>
