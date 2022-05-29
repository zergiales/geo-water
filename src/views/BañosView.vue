<template>
  <div>
    <SideBar></SideBar>
    <v-container grid-list-xs>
      <v-row>
        <v-col cols="6" class="text-center fade-scroll d-flex justify-center">
                  <div>
            <lottie-player
              class="animation-reverse"
              src="https://assets7.lottiefiles.com/packages/lf20_ifeouky0.json"
              background="transparent"
              speed="0.75"
              style="width: 100%; height: 100%"
              autoplay
            ></lottie-player>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue';

export default {
  components: {
    SideBar,
  },
};
</script>
<style>@import '../assets/css/style.css';</style>
