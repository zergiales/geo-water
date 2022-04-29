import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      // colores usados en la app con el tema claro
      light: {
        primary: '#7660F2',
        primaryLight: '#F4813A',
        secondaryMedium: '#3C3B3D',
        secondaryLight: '#e5e5ef',
      },
      dark: {
        primary: '#e5e5ef',
        primaryLight: '#F08080',
        secondaryMedium: '#616161',
        secondaryLight: '#808080',
      },
    },
  },
});
