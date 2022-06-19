<template>
  <div>
    <v-main class="d-flex justify-center align-center">
      <v-row>
        <v-col class="mx-auto">
          <v-card class="pa-4">
            <v-form @submit.prevent="registerUser" ref="form" method="post">
              <v-card-text>
                <v-select
                  v-model="pais"
                  :items="paises"
                  label="Pais"
                  required
                  @change="$v.select.$touch()"
                  @blur="$v.select.$touch()"
                  :error-messages="mensajePais()"
                  >
                </v-select>
                <v-text-field
                  v-model="nombre"
                  :counter="20"
                  label="Nombre"
                  placeholder="Nombre del baño"
                  required
                  @input="$v.nombre.$touch()"
                  :error-messages="mensajeNombre()"
                />
             </v-card-text>
              <v-card-actions class="justify-center d-flex flex-wrap mb-15">
                <v-btn
                  :disabled="$v.$invalid"
                  type="submit"
                  color="indigo"
                  class="mb-3 mt-3"
                >
                  <span class="white--text">busqueda</span>
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
          Formulario limpio
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="white--text" text @click="dialog = false"> Vale </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar top color="red" v-model="snackbar">
      Datos incorrectos
    </v-snackbar>
  </div>
</template>

<script>
import axios from 'axios';
import { validationMixin } from 'vuelidate';
import {
  required,
  maxLength,
  numeric,
  alpha,
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
    pais: {
      /* republica checa (ejemplo de un pais de mas de 10 de longitud) */
      required,
      maxLength: maxLength(20),
      alpha,
    },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
    provincia: {
      required,
      maxLength: maxLength(20),
      alpha,
    },
    cp: {
      required,
      numeric,
      maxLength: maxLength(5),
      /* se limita porque los codigos postales son de 5 digitos */
    },
    ciudad: {
      required,
      maxLength: maxLength(20),
      alpha,
    },
    calle: {
      required,
      maxLength: maxLength(20),
      alpha,
    },
  },
  data: () => ({
    loading: false,
    snackbar: false,
    dialog: false,
    passwordShow: false,
    nombre: '',
    pais: '',
    provincia: '',
    cp: '',
    ciudad: '',
    calle: '',
    paises: [
      'Esp',
    /* actualmente solo ponemos españa porque solo se despliega aquí */
    ],
  }),
  methods: {
    clear() {
      this.dialog = true;
      this.nombre = '';
      this.pais = '';
      this.provincia = '';
      this.cp = '';
      this.ciudad = '';
      this.calle = '';
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
    mensajePais() {
      const mensaje = [];
      if (!this.$v.pais.alpha) {
        mensaje.push('El campo solo admite caracteres alfabéticos');
      } else if (!this.$v.pais.required && this.$v.pais.$dirty) {
        mensaje.push('No has rellenado el campo');
      } else if (!this.$v.pais.maxLength) {
        mensaje.push('has llegado al limite');
      }
      return mensaje;
    },
    mensajeProvincia() {
      const mensaje = [];
      if (!this.$v.provincia.alpha) {
        mensaje.push('El campo solo admite caracteres alfabéticos');
      } else if (!this.$v.provincia.required && this.$v.provincia.$dirty) {
        mensaje.push('No has rellenado el campo');
      } else if (!this.$v.provincia.maxLength) {
        mensaje.push('has llegado al limite');
      }
      return mensaje;
    },
    mensajeCp() {
      const mensaje = [];
      if (!this.$v.cp.numeric) {
        mensaje.push('el campo solo admite caracteres alfabeticos');
      } else if (!this.$v.cp.required && this.$v.cp.$dirty) {
        mensaje.push('rellena el campo');
      } else if (!this.$v.cp.maxLength) {
        mensaje.push('has llegado al limite');
      }
      return mensaje;
    },
    mensajeCiudad() {
      const mensaje = [];
      if (!this.$v.ciudad.alpha) {
        mensaje.push('El campo solo admite caracteres alfabéticos');
      } else if (!this.$v.ciudad.required && this.$v.ciudad.$dirty) {
        mensaje.push('No has rellenado el campo');
      } else if (!this.$v.ciudad.maxLength) {
        mensaje.push('has llegado al limite');
      }
      return mensaje;
    },
    mensajeCalle() {
      const mensaje = [];
      if (!this.$v.calle.alpha) {
        mensaje.push('El campo solo admite caracteres alfabéticos');
      } else if (!this.$v.calle.required && this.$v.calle.$dirty) {
        mensaje.push('No has rellenado el campo');
      } else if (!this.$v.calle.maxLength) {
        mensaje.push('has llegado al limite');
      }
      return mensaje;
    },
    // metodo para enviar los datos a servidor
    async registerUser() {
      // if para validar desde front los datos que vamos a mandar a la base de datos
      if (!this.$v.$error) {
        const response = await axios.post(
          `${process.env.VUE_APP_SERVER_TOTAL_PATH}/banios`,
          {
            nombre: this.nombre,
            pais: this.pais,
            provincia: this.provincia,
            cp: this.cp,
            ciduad: this.ciudad,
            calle: this.calle,
          },
        );
        console.log(response);
        console.log(`${process.env.VUE_APP_SERVER_TOTAL_PATH}/banios`);
        if (response.data.nombre) {
          this.$router.push('/banios');
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
