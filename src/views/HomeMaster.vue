<!--lo organizamos todo en unaunica vista-->
<template>
  <div>
    <MyHeader></MyHeader>
    <v-container fluid>
      <MyHome></MyHome>
      <MyProyects></MyProyects>
      <AboutMe></AboutMe>
      <ContactMe></ContactMe>
    </v-container>
    <MyFooter></MyFooter>
  </div>
</template>
<script>
import MyHeader from '../components/MyHeader.vue';
import MyHome from '../components/MyHome.vue';
import MyProyects from '../components/MyProjects.vue';
import AboutMe from '../components/AboutMe.vue';
import ContactMe from '../components/ContactMe.vue';
import MyFooter from '../components/MyFooter.vue';

export default {
  components: {
    MyHeader,
    MyHome,
    MyProyects,
    AboutMe,
    ContactMe,
    MyFooter,
  },
};
</script>
<style>@import '../assets/css/style.css';</style>
