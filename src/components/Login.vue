<template>
  <v-app>
    <div class="login"></div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4"  class="mx-auto">
        <v-card class="pa-5 pt-5" width="850" height="700">
          <div class=" pa-5 text-center">
            <v-avatar size="90" color="indigo lighten-4">
              <!--to do: poner imagen-->
              <v-icon size="40" color="indigo">mdi-account</v-icon>
            </v-avatar>
            <h2 class=" pt-10 indigo--text">Bienvenido a Geo Water</h2>
          </div>
          <v-form @submit.prevent="getUser" ref="form">
            <v-card-text>
              <v-text-field
                class="pt-9"
                v-model="email"
                :rules="emailRules"
                type="email"
                label="Inserte correo electronico"
                placeholder="correo@gmail.com"
                prepend-inner-icon="mdi-account"
                required
              />
              <v-text-field
                class="pt-9"
                v-model="password"
                :rules="passwordRules"
                :type="passwordShow ? 'text' : 'password'"
                label="Inserte contraseña"
                placeholder="1234"
                prepend-inner-icon="mdi-key"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="passwordShow = !passwordShow"
                required
              />
              <v-row class="pt-12 pl-10 texto d-flex justify-center align-center">
                <v-col cols="5" class="px-0 pl-10">¿No estas registrado aún?</v-col>
              <v-col class="enlace px-1" cols="4"
              @click="$router.push('/registro')">Registrate</v-col>
              </v-row>
            </v-card-text>
            <v-card-actions class=" pt-12 justify-center">
              <v-btn :loading="loading" type="submit" color="indigo">
                <span class="white--text px-8" >Iniciar sesión</span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="550"
        transition="dialog-top-transition"
    >
      <v-card>
        <v-card-title class="text-h5">
          El usuario o la contraseña son erroneos
        </v-card-title>
        <v-card-text>Vuelve a insertar la contraseña o el usuario</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="secondary"
            text
            @click="dialog = false"
          >ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      </v-col>
    </v-main>
    <v-snackbar top color="green" v-model="snackbarLogin">
      Bienvenido
    </v-snackbar>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data: () => ({
    dialog: false,
    loading: false,
    snackbarLogin: false,
    passwordShow: false,
    email: '',
    emailRules: [
      (v) => !!v || 'Se necesita un correo valido',
      (v) => /.+@.+\..+/.test(v) || 'acuerdate de escribirlo bien con @gmail.com...',
    ],
    password: '',
    passwordRules: [
      (v) => !!v || 'Se necesita una contraseña valida',
      (v) => (v && v.length >= 8) || 'la contraseña debe tener minimo 8 caracteres!',
    ],
  }),
  methods: {
    submitHandler() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.getUser();
        setTimeout(() => {
          this.loading = false;
          this.snackbar = true;
        }, 3000);
      }
    },
    async getUser() {
      const response = await axios.post(
        `${process.env.VUE_APP_SERVER_TOTAL_PATH}/login`,
        {
          email: this.email,
          contraseña: this.password,
          snackbarLogin: true,
        },
      );
      if (response.data.nombre) {
        this.$router.push('/home');
      } else {
        this.dialog = true;
        this.email = '';
        this.password = '';
      }
    },
  },
};
</script>
<style scooped>
  .enlace{
    cursor: pointer;
    color: gray;
  }
  .enlace:hover{
    text-decoration: underline;
  }
</style>
