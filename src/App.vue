<template>
<v-app>
      <!-- If using vue-router -->
      <router-view></router-view>
</v-app>
</template>

<script>

export default {
  name: 'App',
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: 'smooth' });
    },
  },

};
</script>
