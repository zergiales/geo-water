<template>
  <v-app>
    <v-main class="fondo">
    <v-row>
      <v-col sg="9" lg="5" md="8" sm="5" xs="5" class="mx-auto">
        <v-card class="tarjeta elevation-10">
          <div class=" pt-5 text-center">
            <v-avatar size="100" color="indigo lighten-4">
              <!--to do: poner imagen-->
              <v-icon size="40" color="indigo">mdi-account</v-icon>
            </v-avatar>
            <h2 class=" pt-3 indigo--text">Bienvenido a Geo Water</h2>
          </div>
          <v-form @submit.prevent="getUser" ref="form">
            <v-card-text>
              <!--email-->
              <v-text-field
              class="pt-1"
              v-model="email"
              label="Correo electrónico"
              placeholder="correo@gmail.com"
              required
              prepend-inner-icon="mdi-account"
              :error-messages="mensajeEmail()"/>
              <!--hueco password-->
              <v-text-field
              class="pt-1 titulillo"
              v-model="password"
              :type="passwordShow ? 'text' : 'password'"
              label="Contraseña"
              prepend-inner-icon="mdi-key"
              :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
              placeholder="8 caracteres"
              @click:append="passwordShow = !passwordShow"
              required
              :error-messages="mensajeContraseña()"
              />
              <v-row class="texto pl-10">
                <v-col sg="6" lg="6" md="6" sm="12">¿Aún no estas registrado?</v-col>
                <v-col class="enlace" sg="6" lg="6" md="6" sm="12"
                @click="$router.push('/registro')">Regístrate</v-col>
              </v-row>
            </v-card-text>
            <v-card-actions class="justify-center">
            <!--cambio de "loading" por cargando-->
              <v-btn :loading="cargando" type="submit" color="indigo">
                <span class="white--text px-8">Iniciar sesión</span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
        <!--ventana que sale si nos equivocamos-->
        <v-dialog v-model="dialog" color="indigo" persistent max-width="550"
               transition="dialog-top-transition">
          <v-card>
            <v-card-title class="text-h5">
              El usuario o la contraseña son erroneos
            </v-card-title>
            <v-card-text>Prueba de nuevo</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="secondary" text @click="dialog = false"> Vale
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
    </v-main>
    <v-snackbar top color="green" v-model="snackbarLogin"
    width="450" height="100" class="text--center">
      <strong>Bienvenido a Geo Water</strong>
    </v-snackbar>
  </v-app>
</template>

<script>
import axios from 'axios';
import { validationMixin } from 'vuelidate';
import {
  required, maxLength, minLength, email,
} from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  mixins: [validationMixin],
  validations: {
    email: {
      required, email, maxLength: maxLength(20),
    },
    password: { required, minLength: minLength(8) },
  },
  data: () => ({
    dialog: false,
    loading: false,
    snackbarLogin: false,
    passwordShow: false,
    email: '',
    password: '',
  }),
  methods: {

    ...mapActions([
      'actualizarIdAction',
      'actualizarNombreAction',
      'actualizarTipoAction',
    ]),

    async getUser() {
      const response = await axios.post(
        `${process.env.VUE_APP_SERVER_TOTAL_PATH}/login`,
        {
          email: this.email,
          contraseña: this.password,
        },
      );
      console.log(response.data.email);
      console.log(response.data.nombre);
      console.log(response.data.id);
      console.log(response.data.tipo);
      console.log(`${process.env.VUE_APP_SERVER_TOTAL_PATH}/login`);
      if (response.data.nombre) {
        setTimeout(() => {
          this.snackbarLogin = true;
          this.loading = true;
          /* datos del usuario que recogemos */
          this.actualizarIdAction(response.data.id);
          this.actualizarNombreAction(response.data.nombre);
          this.actualizarTipoAction(response.data.tipo);
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
    mensajeEmail() {
      const mensaje = [];
      if (!this.$v.email.email) {
        mensaje.push('el campo solo admite caracteres alfabeticos');
      } else if (!this.$v.email.required && this.$v.email.$dirty) {
        mensaje.push('rellena el campo');
      }
      return mensaje;
    },
    mensajeContraseña() {
      const mensaje = [];
      if (!this.$v.password.minLength) {
        mensaje.push('Se necesita minimo 8 caracteres');
      } else if (!this.$v.email.required && this.$v.email.$dirty) {
        mensaje.push('Rellena el campo');
      }
      return mensaje;
    },
  },
};
</script>
<style>
@import '../assets/css/style.css';
@import '../assets/css/login.css';
</style>
