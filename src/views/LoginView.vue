<!--lo organizamos todo en unaunica vista-->
<template>
    <v-container >
      <MyLogin></MyLogin>
    </v-container>
</template>
<script>
import MyLogin from '../components/Login.vue';

export default {
  components: {
    MyLogin,
  },
};
</script>
<style scooped>
@import '../assets/css/style.css';

/*.fondo{
    background-color:#e1e1e1;
    height: 100%;
    width: 100%;
}*/
</style>
