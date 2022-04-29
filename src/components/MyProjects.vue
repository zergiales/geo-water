<template>
  <div id="proyects">
    <v-row>
      <v-col cols="12" class="text-center fade-scroll  d-flex justify-center">
        <h1>PROYECTS</h1>
        <p></p>
      </v-col>
    </v-row>
    <!--tarjetas donde se muestran todos los proyectos que tengo-->
    <v-row>
      <v-col v-for="proyect in proyects" :key="proyect.name"
      cols="3" class="text-center fade-scroll tarjeta d-flex justify-center">
        <v-card class="mx-auto my-12" width="350" height="580">
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>
          <v-card-title class="d-flex justify-center align-center">
            <strong class="titulillo display-1">{{ proyect.name}}</strong></v-card-title>
          <v-img  contain :src="getImg(proyect.img)" :class="proyect.img" class="imagen"></v-img>
          <div class="d-flex flex-row mb-6">
            <v-img contain v-for="icon in proyect.tecnologias"
            :key="icon.tecnologias" :src="getImg(icon)" class="iconitos" ></v-img>
          </div>
          <v-card-text class="text-justify">
            <div height="500" class="texto">{{proyect.descripcion}}</div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions class="d-flex justify-center align-center">
            <v-btn color="primary" large outlined class="btnC" @click="abrirVentana(proyect.link)">
              Show more
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'MyProjects',
  data() {
    return {
      proyects: [
        {
          img: 'capturas/ahorcadoIcon',
          name: 'Ahorcado',
          tecnologias: [
            'logos/html5',
            'logos/css3',
            'logos/javascript',
          ],
          descripcion: 'Ahorcado que realizado con un array que contiene palabras que tendras que adivinar.',
          link: 'https://github.com/zergiales/ahorcado.git',
        },
        {
          img: 'capturas/trivialIcon',
          name: 'Trivial',
          tecnologias: [
            'logos/html5',
            'logos/css3',
            'logos/javascript',
            'logos/php',
            'logos/csv',
          ],
          descripcion: 'Trivial que guarda las preguntas en un csv. 100% funcional.',
          link: 'https://github.com/zergiales/trivial.git',
        },
        {
          img: 'capturas/calculadoraIcon',
          name: 'Calculadora',
          tecnologias: [
            'logos/html5',
            'logos/css3',
            'logos/javascript',
          ],
          descripcion: 'Calculadora realizada con el paradigma poo. tiene opcion cientifica.',
          link: 'https://github.com/zergiales/calculadora.git',
        },
        {
          img: 'capturas/gesto',
          name: 'Gestor de alumnos',
          tecnologias: [
            'logos/html5',
            'logos/bootstrap',
            'logos/javascript',
            'logos/php',
            'logos/sql',
          ],
          descripcion: 'Gestor de base de datos de una escuela de alumnos funcional.',
          link: 'https://github.com/zergiales/gestor-base-alumnos.git',
        },
      ],
    };
  },
  methods: {
    getImg(img) {
      // eslint-disable-next-line
      return require(`../assets/img/${img}.png`);
    },
    abrirVentana(parametro) {
      window.open(parametro);
    },
  },
};
</script>
