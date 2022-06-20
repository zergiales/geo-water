<template>
  <div>
    <v-main class="d-flex justify-center align-center">
      <v-row>
        <v-col class="mx-auto">
          <v-card class="pa-4">
            <v-form @submit.prevent="enviarDatos" ref="form" method="post">
              <v-card-text>
                <v-select
                  v-model="tabla"
                  :items="tablas"
                  label="seleccione la tabla"
                  required
                  @change="$v.select.$touch()"
                  :error-messages="mensajeTabla()"
                  >
                </v-select>
                <v-text-field
                  v-model="nombre"
                  :counter="20"
                  label="Nombre"
                  placeholder="Nombre del usuario o titulo"
                  required
                  @input="$v.nombre.$touch()"
                  :error-messages="mensajeNombre()"
                />
                <!--:disabled="$v.$invalid"-->
             </v-card-text>
              <v-card-actions class="justify-center d-flex flex-wrap mb-15">
                <v-btn
                  type="submit"
                  color="indigo"
                  class="mb-3 mt-3"
                >
                  <span class="white--text">busqueda</span>
                </v-btn>
                <v-btn @click="clear()" color="indigo">
                  <span class="white--text px-4">Limpiar</span>
                </v-btn>
                <v-btn @click="$router.push('/usuario')" color="indigo">
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
    tabla: {
      required,
      maxLength: maxLength(20),
      alpha,
    },
    select: { required },
  },
  data: () => ({
    loading: false,
    snackbar: false,
    dialog: false,
    nombre: '',
    tabla: '',
    tablas: [
      'Usuario',
      'Baños',
      'Reseñas',
    ],
  }),
  methods: {
    clear() {
      this.dialog = true;
      this.nombre = '';
      this.tabla = '';
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
    mensajeTabla() {
      const mensaje = [];
      if (!this.$v.tabla.alpha) {
        mensaje.push('El campo solo admite caracteres alfabéticos');
      } else if (!this.$v.tabla.required && this.$v.tabla.$dirty) {
        mensaje.push('No has rellenado el campo');
      } else if (!this.$v.tabla.maxLength) {
        mensaje.push('has llegado al limite');
      }
      return mensaje;
    },
    // metodo para enviar los datos a servidor
    async enviarDatos() {
      // if para validar desde front los datos que vamos a mandar a la base de datos
      if (!this.$v.$error) {
        const response = await axios.post(
          `${process.env.VUE_APP_SERVER_TOTAL_PATH}/usuario/eliminar`,
          {
            nombre: this.nombre,
            tabla: this.tabla,
          },
        );
        console.log(response);
        console.log(`${process.env.VUE_APP_SERVER_TOTAL_PATH}/usuario/eliminar`);
        if (response.data.nombre) {
          this.$router.push('/usuario/eliminar');
          console.log('llega hasta aqui');
        } else {
          this.snackbar = true;
          console.log('entra en el else');
        }
      } else {
        this.snackbar = true;
        this.nombre = '';
        this.tabla = '';
      }
    },
  },
};
</script>
