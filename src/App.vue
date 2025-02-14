<template>
  <div class="app-container">
    <Navbar />
    <div class="content">
      <div class="title"><h1>Kattanj rá te is!</h1></div>
      <div class="container">
        <div class="box"><AdBannerVertical /></div>
        <div class="box"><router-view /></div>
        <div class="box"><AdBannerVertical /></div>
      </div>
      <AdBannerHorizontal />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import AdBannerVertical from '@/components/AdBannerVertical.vue';
import AdBannerHorizontal from '@/components/AdBannerHorizontal.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full height of the viewport */
}

.content {
  flex: 1; /* Takes up remaining space, pushing the footer down */
}

.title {
  text-align: center;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: stretch; /* Makes children (boxes) stretch to the same height */
  height: 100%; /* Ensures full height */
}

.box {
  display: flex;
  align-items: center;  /* Center vertically */
  justify-content: center; /* Center horizontally */
  text-align: center; /* Ensures text is centered */
  width: 100%; /* Optional: Ensure full width */
  height: 100%; /* Optional: Adjust as needed */
  flex: 1;
}
</style>