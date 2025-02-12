<template>
  <Navbar />
  <div class="title"><h1>Kattanj rá te is!</h1></div>
  <div class="container">
    <div class="box"><AdBannerVertical /></div>
    <div class="box"><router-view /></div>
    <div class="box"><AdBannerVertical /></div>
  </div>
  <AdBannerHorizontal />
  <Footer />
</template>

<script setup>
import AdBannerVertical from '@/components/AdBannerVertical.vue';
import AdBannerHorizontal from '@/components/AdBannerHorizontal.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
</script>

<style scoped>
.title {
  text-align: center;
}

.container {
  display: flex;  /* Enables Flexbox */
  justify-content: space-between;  /* Optional: adds space between items */
}

.box {
  text-align: center;
}
</style>