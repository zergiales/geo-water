<template>
  <div>
    <v-main class="d-flex justify-center align-center">
      <v-row>
        <v-col class="mx-auto">
          <v-card class="pa-4">
            <div class="text-center">
              <h2 class="indigo--text">Hacer una reseña</h2>
            </div>
            <v-form @submit.prevent="enviarReseña" ref="form" method="post">
              <v-card-text>
                <v-text-field
                  v-model="titulo"
                  :counter="20"
                  label="titulo"
                  placeholder="titulo del baño"
                  required
                  @input="$v.titulo.$touch()"
                  :error-messages="mensajeTitulo()"
                />
                <v-select
                  v-model="baño"
                  :items="baños"
                  label="baño"
                  required
                  @change="$v.select.$touch()"
                  @blur="$v.select.$touch()"
                  :error-messages="mensajeBaño()"
                  >
                </v-select>
                <v-text-field
                  v-model="descripcion"
                  :counter="20"
                  label="descripcion"
                  placeholder="Guadalajara"
                  required
                  @input="$v.descripcion.$touch()"
                  :error-messages="mensajeDescripcion()"
                />
             </v-card-text>
              <v-card-actions class="justify-center d-flex flex-wrap mb-15">
                <v-btn
                  :disabled="$v.$invalid"
                  type="submit"
                  color="indigo"
                  class="mb-3 mt-3"
                >
                  <span class="white--text">Insertar baño</span>
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
  alpha,
} from 'vuelidate/lib/validators';

export default {
  name: 'App',
  mixins: [validationMixin],
  validations: {
    titulo: {
      required,
      maxLength: maxLength(20),
      alpha,
    },
    baño: {
      required,
    },
    descripcion: {
      required,
      maxLength: maxLength(140),
      alpha,
    },
  },
  data: () => ({
    loading: false,
    snackbar: false,
    dialog: false,
    titulo: '',
    baño: '',
    descripcion: '',
    baños: [
      'baño1',
      'baño2',
      'baño3',
    /* actualmente solo ponemos españa porque solo se despliega aquí */
    ],
  }),
  methods: {
    clear() {
      this.dialog = true;
      this.titulo = '';
      this.baño = '';
      this.descripcion = '';
    },
    mensajeTitulo() {
      const mensaje = [];
      if (!this.$v.titulo.alpha) {
        mensaje.push('El campo solo admite caracteres alfabéticos');
      } else if (!this.$v.titulo.required && this.$v.titulo.$dirty) {
        mensaje.push('No has rellenado el campo');
      } else if (!this.$v.titulo.maxLength) {
        mensaje.push('has llegado al limite');
      }
      return mensaje;
    },
    mensajeBaño() {
      const mensaje = [];
      if (!this.$v.baño.alpha) {
        mensaje.push('El campo solo admite caracteres alfabéticos');
      } else if (!this.$v.baño.required && this.$v.baño.$dirty) {
        mensaje.push('No has rellenado el campo');
      } else if (!this.$v.baño.maxLength) {
        mensaje.push('has llegado al limite');
      }
      return mensaje;
    },
    mensajeDescripcion() {
      const mensaje = [];
      if (!this.$v.descripcion.alpha) {
        mensaje.push('El campo solo admite caracteres alfabéticos');
      } else if (!this.$v.descripcion.required && this.$v.descripcion.$dirty) {
        mensaje.push('No has rellenado el campo');
      } else if (!this.$v.descripcion.maxLength) {
        mensaje.push('has llegado al limite');
      }
      return mensaje;
    },
    // metodo para enviar los datos a servidor
    async enviarReseña() {
      // if para validar desde front los datos que vamos a mandar a la base de datos
      if (!this.$v.$error) {
        const response = await axios.post(
          `${process.env.VUE_APP_SERVER_TOTAL_PATH}/resenias`,
          {
            titulo: this.titulo,
            baño: this.baño,
            descripcion: this.descripcion,
          },
        );
        console.log(response);
        console.log(`${process.env.VUE_APP_SERVER_TOTAL_PATH}/banios`);
        if (response.data.titulo) {
          this.$router.push('/banios');
        } else {
          this.snackbar = true;
        }
      } else {
        this.snackbar = true;
      }
    },
  },
};
</script>
