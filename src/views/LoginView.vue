<!--lo organizamos todo en unaunica vista-->
<template>
    <v-container>
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

.fondo{
    background-color: rgb(239, 238, 238);
}
</style>
