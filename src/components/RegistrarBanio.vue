<template>
  <div>
    <v-main class="d-flex justify-center align-center">
      <v-row>
        <v-col class="mx-auto">
          <v-card class="pa-4">
            <div class="text-center">
              <h2 class="indigo--text">Registrar Baño</h2>
            </div>
            <v-form @submit.prevent="registerUser" ref="form" method="post">
              <v-card-text>
                <v-text-field
                  v-model="nombre"
                  :counter="20"
                  label="Nombre"
                  placeholder="azuqueca"
                  required
                  @input="$v.nombre.$touch()"
                  :error-messages="mensajeNombre()"
                />
                <v-text-field
                  v-model="apellido1"
                  :counter="20"
                  label="Apellido 1"
                  placeholder="De Arco"
                  required
                  @input="$v.apellido1.$touch()"
                  :error-messages="mensajeApellido1()"
                />
                <v-text-field
                  v-model="apellido2"
                  :counter="20"
                  :class="{ error1: $v.apellido2.$error }"
                  label="Apellido 2"
                  placeholder="De Arco"
                  required
                  @input="$v.apellido2.$touch()"
                  :error-messages="mensajeApellido2()"
                />
                <v-text-field
                  v-model="email"
                  label="Inserte correo electronico"
                  placeholder="correo@gmail.com"
                  required
                  :error-messages="mensajeEmail()"
                />
                <v-text-field
                  v-model="password"
                  :type="passwordShow ? 'text' : 'password'"
                  label="Inserte contraseña"
                  placeholder="12345678"
                  :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="passwordShow = !passwordShow"
                  required
                  :error-messages="mensajeContraseña()"
                />
                <v-text-field
                  v-model="passwordC"
                  :type="passwordShowC ? 'text' : 'password'"
                  label="Confrmar contraseña"
                  placeholder="12345678"
                  :append-icon="passwordShowC ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="passwordShowC = !passwordShowC"
                  required
                  :error-messages="mensajeContraseñaConf()"
                />
              </v-card-text>
              <v-card-actions class="justify-center d-flex flex-wrap mb-15">
                <v-btn
                  :disabled="$v.$invalid"
                  type="submit"
                  color="indigo"
                  class="mb-3 mt-3"
                >
                  <span class="white--text">Crear usuario</span>
                </v-btn>
                <v-btn @click="clear()" color="indigo">
                  <span class="white--text px-4">Limpiar</span>
                </v-btn>
                <v-btn @click="$router.push('/')" color="indigo">
                  <span class="white--text px-4">Volver</span>
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="550"
      transition="dialog-top-transition"
    >
      <v-card color="indigo">
        <v-card-title class="text-h5 white--text">
          Registro limpiado
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="white--text" text @click="dialog = false"> Vale </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar top color="red" v-model="snackbar">
      Registro incorrecto
    </v-snackbar>
  </div>
</template>

<script>
import axios from 'axios';
import { validationMixin } from 'vuelidate';
import {
  required,
  maxLength,
  minLength,
  email,
  alpha,
  sameAs,
} from 'vuelidate/lib/validators';

export default {
  name: 'App',
  mixins: [validationMixin],
  validations: {
    nombre: {
      required,
      maxLength: maxLength(20),
      alpha,
    },
    apellido1: {
      required,
      maxLength: maxLength(20),
      alpha,
    },
    apellido2: {
      required,
      maxLength: maxLength(20),
      alpha,
    },
    email: {
      required,
      email,
      maxLength: maxLength(20),
    },
    password: {
      required,
      sameAs: sameAs('passwordC'),
      minLength: minLength(8),
    },
    passwordC: {
      required,
      sameAs: sameAs('password'),
      minLength: minLength(8),
    },
  },
  data: () => ({
    loading: false,
    snackbar: false,
    dialog: false,
    passwordShow: false,
    nombre: '',
    apellido1: '',
    apellido2: '',
    email: '',
    password: '',
    passwordC: '',
    passwordShowC: false,
  }),
  methods: {
    clear() {
      this.dialog = true;
      this.nombre = '';
      this.apellido1 = '';
      this.apellido2 = '';
      this.email = '';
      this.password = '';
      this.passwordC = '';
    },
    mensajeNombre() {
      const mensaje = [];
      if (!this.$v.nombre.alpha) {
        mensaje.push('El campo solo admite caracteres alfabéticos');
      } else if (!this.$v.nombre.required && this.$v.nombre.$dirty) {
        mensaje.push('No has rellenado el campo');
      } else if (!this.$v.nombre.maxLength) {
        mensaje.push('has llegado al limite');
      }
      return mensaje;
    },
    mensajeApellido1() {
      const mensaje = [];
      if (!this.$v.apellido1.alpha) {
        mensaje.push('El campo solo admite caracteres alfabéticos');
      } else if (!this.$v.apellido1.required && this.$v.apellido1.$dirty) {
        mensaje.push('No has rellenado el campo');
      } else if (!this.$v.apellido1.maxLength) {
        mensaje.push('has llegado al limite');
      }
      return mensaje;
    },
    mensajeApellido2() {
      const mensaje = [];
      if (!this.$v.apellido2.alpha) {
        mensaje.push('El campo solo admite caracteres alfabéticos');
      } else if (!this.$v.apellido2.required && this.$v.apellido2.$dirty) {
        mensaje.push('No has rellenado el campo');
      } else if (!this.$v.apellido2.maxLength) {
        mensaje.push('has llegado al limite');
      }
      return mensaje;
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
    mensajeContraseñaConf() {
      const mensaje = [];
      if (!this.$v.passwordC.minLength) {
        mensaje.push('Se necesitan minimo 8 caracteres');
      } else if (!this.$v.passwordC.required && this.$v.passwordC.$dirty) {
        mensaje.push('Rellena el campo');
      }
      return mensaje;
    },
    // metodo para enviar los datos a servidor
    async registerUser() {
      // if para validar desde front los datos que vamos a mandar a la base de datos
      if (!this.$v.$error) {
        const response = await axios.post(
          `${process.env.VUE_APP_SERVER_TOTAL_PATH}/register`,
          {
            nombre: this.nombre,
            apellido1: this.apellido1,
            apellido2: this.apellido2,
            email: this.email,
            contraseña: this.password,
            contraseña2: this.passwordC,
          },
        );
        console.log(response);
        if (response.data.text) {
          this.$router.push('/');
        } else {
          this.snackbar = true;
          this.email = '';
          this.password = '';
          this.passwordC = '';
        }
      } else {
        this.snackbar = true;
        this.email = '';
        this.password = '';
        this.passwordC = '';
      }
    },
  },
};
</script>
