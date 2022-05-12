<!--lo organizamos todo en unaunica vista-->
<template>
  <div>
    <Register></Register>
    <MyLogin></MyLogin>
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
import Register from '../components/Register.vue';
import MyLogin from '../components/MyLogin.vue';
import MyHeader from '../components/MyHeader.vue';
import MyHome from '../components/MyHome.vue';
import MyProyects from '../components/MyProjects.vue';
import AboutMe from '../components/AboutMe.vue';
import ContactMe from '../components/ContactMe.vue';
import MyFooter from '../components/MyFooter.vue';

export default {
  components: {
    Register,
    MyLogin,
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
