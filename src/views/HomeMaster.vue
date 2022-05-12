<!--lo organizamos todo en unaunica vista-->
<template>
  <div>
    <v-container fluid>
    <MyLogin></MyLogin>
    </v-container>
  </div>
</template>
<script>
import MyLogin from '../components/Login.vue';

export default {
  components: {
    MyLogin,
  },
};
</script>
<style>@import '../assets/css/style.css';</style>
