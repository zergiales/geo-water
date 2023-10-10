<!--lo organizamos todo en unaunica vista-->
<template>
      <MyLogin></MyLogin>
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
@import '../assets/css/login.css';
</style>
