<template>
      <v-list-item class="flex-row-reverse">
        <v-list-item-avatar>
          <v-img src="@/assets/img/logos/sesion.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-title class="flex-row-reverse text--bolder" value="response.data.nombre">
        </v-list-item-title>
      </v-list-item>
</template>
<script>
import axios from 'axios';

export default {
  name: 'App',
  data: () => ({
    nombre: '',
  }),
  methods: {
    async getUser() {
      const response = await axios.post(
        `${process.env.VUE_APP_SERVER_TOTAL_PATH}/login`,
        {
          nombre: this.nombre,
        },
      );
      console.log(response.data.nombre);
      if (response.data.nombre) {
        setTimeout(() => {
          this.snackbarLogin = true;
          this.loading = true;
        }, 1000);
        setTimeout(() => {
          this.$router.push('/home');
        }, 2000);
      } else {
        this.dialog = true;
        this.email = '';
        this.password = '';
      }
    },
  },
};
</script>
