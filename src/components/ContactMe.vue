<template>
  <div class="contenedor3" id="contact">
    <v-row>
      <v-col cols="12" class="text-center fade-scroll d-flex justify-center">
        <h1>CONTACT WITH ME</h1>
        <p></p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="text-center fade-scroll white--text d-flex justify-center
      align-center">
        <div class="contenedor1 elevation-3" height="50%">
          <h2>Si estas interesado</h2>
          <p>
            Para ponerte en contacto conmigo,hazemlo saber enviandome un correo
            electronico<br />
            Tambien puedes ponerte en contacto en conmigo a traves de
            <strong
              ><a href="https://www.linkedin.com/in/sergio-s%C3%A1nchez-8b5711162/" class="enlace white--text">Linkedin</a
              >.</strong
            ><br />
            Y si aun no has visto mis proyectos te recomiendos que mirar mi
            <strong
              ><a href="https://github.com/zergiales" class="enlace white--text">Github</a>.</strong
            ><br />
          </p>
        </div>
      </v-col>
      <v-col cols="6" class="text-center fade-scroll white--text
      d-flex justify-center align-center">
        <div class="formulario elevation-3">
          <form action=”mailto:zergiosanchezlopez@gmail.com”
          method="post" enctype="multipart/form-data">
            <!--donde metemos el nombre-->
            <v-text-field v-model="name" :error-messages="nameErrors" :counter="10"
              label="Nombre" required @input="$v.name.$touch()" @blur="$v.name.$touch()"
            ></v-text-field>
            <!--email-->
            <v-text-field
              v-model="email" :error-messages="emailErrors" label="E-mail" required
              @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
            <!--para saber si es una empresa o particular-->
            <v-select v-model="select" :items="items" :error-messages="selectErrors"
            label="¿Eres una empresa o partcular?" required @change="$v.select.$touch()"
            @blur="$v.select.$touch()"></v-select>
            <v-checkbox v-model="checkbox" :error-messages="checkboxErrors" label="Do you agree?"
            required @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()"
            ></v-checkbox>
            <!--botones-->
            <v-btn class="mr-4" @click="submit"> submit </v-btn>
            <v-btn @click="clear"> clear </v-btn>
          </form>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength, email } from 'vuelidate/lib/validators';

export default {
  name: 'AboutMe',
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: '',
    email: '',
    select: null,
    items: [
      'Particular',
      'Empresa',
    ],
    checkbox: false,
  }),

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = '';
      this.email = '';
      this.select = null;
      this.checkbox = false;
    },
  },

};
</script>
