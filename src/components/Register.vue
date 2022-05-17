<template>
  <v-app>
    <div class="login"></div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-4">
          <div class="text-center">
            <h2 class="indigo--text">Registro de usuario</h2>
          </div>
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text>
                <v-text-field
                v-model="nombre"
                :rules="nombreReglas"
                type="text"
                label="Nombre"
                placeholder="Juana"
                required
              />
                <v-text-field
                v-model="apellido1"
                :rules="apellidoReglas"
                type="text"
                label="Apellido 1"
                placeholder="De Arco"
                required
              />
                <v-text-field
                v-model="apellido2"
                :rules="apellidoReglas"
                type="text"
                label="Apellido 2"
                placeholder="sin Arco"
                required
              />
              <v-text-field
                v-model="email"
                :rules="emailRules"
                type="email"
                label="Inserte correo electronico"
                placeholder="correo@gmail.com"
                required
              />
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                :type="passwordShow ? 'text' : 'password'"
                label="Inserte contraseña"
                placeholder="Yogur1234"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="passwordShow = !passwordShow"
                required
              />
              <v-text-field
                v-model="passwordC"
                :rules="passwordRules"
                :type="passwordShow ? 'text' : 'password'"
                label="Confrmar contraseña"
                placeholder="1234"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="passwordShow = !passwordShow"
                required
              />
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn :loading="loading" type="submit" color="indigo">
                <span class="white--text px-8">Crear usuario</span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
    <v-snackbar top color="green" v-model="snackbar">
      Login success
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    loading: false,
    snackbar: false,
    passwordShow: false,
    email: '',
    emailRules: [
      (v) => !!v || 'Se necesita un correo valido',
      (v) => /.+@.+\..+/.test(v) || 'acuerdate de escribirlo bien con @ y eso',
    ],
    password: '',
    passwordC: '',
    passwordRules: [
      (v) => !!v || 'Se necesita una contraseña valida',
      (v) => (v && v.length >= 8) || 'la contraseña debe tener minimo 8 caracteres!',
    ],
    nombre: '',
    nombreReglas: [
      (v) => !!v || 'inserte un nombre',
      (v) => (v && v.length >= 1) || 'he dicho un nombre no una palabra',
    ],
    apellido1: '',
    apellido2: '',
    apellidoReglas: [
      (v) => !!v || 'inserte un apellido',
      (v) => (v && v.length >= 1) || 'he dicho un apellido no una palabra',
    ],
  }),
  methods: {
    submitHandler() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.snackbar = true;
        }, 3000);
      }
    },
  },
};
</script>
