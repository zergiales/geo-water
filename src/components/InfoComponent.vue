<template>
  <v-card
    max-width="80%"
    height="100%"
    class="mx-auto"
  >
    <v-app-bar
      dark
      color="indigo">
      <v-toolbar-title class="white--text">Acceso rápido</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="primaryLight"
            dark
          >
            <v-card-title class="text-h5">
              ¿Quieres añadir un baño?
            </v-card-title>
            <v-card-subtitle>Añade baños donde quieras</v-card-subtitle>

            <v-card-actions>
              <v-btn text>
                Agregar un baño
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    v-if="item.artist === 'Ellie Goulding'"
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                  >
                  </v-btn>

                  <v-btn
                    v-else
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    Siguiente
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        color: '#1F7087',
        title: '¿No sabes donde hay un baño?',
        artist: 'Nosotros te decimos donde',
      },
      {
        color: '#952175',
        title: 'Hacer una resña',
        artist: 'cuenta al mundo lo que quieras',
      },
    ],
  }),
};
</script>
