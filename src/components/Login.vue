<template>
  <v-app>
    <div class="login"></div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-4">
          <div class="text-center">
            <v-avatar size="90" color="indigo lighten-4">
              <!--to do: poner imagen-->
              <v-icon size="40" color="indigo">mdi-account</v-icon>
            </v-avatar>
            <h2 class="indigo--text">Bienvenido a Geo Water</h2>
          </div>
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                type="email"
                label="Inserte correo electronico"
                placeholder="correo@gmail.com"
                prepend-inner-icon="mdi-account"
                required
              />
              <v-text-field
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
              <v-switch label="Recordar contraseña" color="indigo"></v-switch>
              <v-btn @click="$router.push('/registro')">No tengo cuenta</v-btn>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn :loading="loading" type="submit" color="indigo">
                <span class="white--text px-8">Iniciar sesión</span>
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
    passwordRules: [
      (v) => !!v || 'Se necesita una contraseña valida',
      (v) => (v && v.length >= 8) || 'la contraseña debe tener minimo 8 caracteres!',
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
