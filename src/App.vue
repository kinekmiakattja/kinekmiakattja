<template>
  <Header />
  <div class="container">
    <div class="box"><AdBannerHorizontal /></div>
    <div class="box"><router-view /></div>
    <div class="box"><AdBannerHorizontal /></div>
  </div>
  
  <AdBannerVertical />
  <Footer />
</template>

<script setup>
import AdBannerVertical from '@/components/AdBannerVertical.vue';
import AdBannerHorizontal from '@/components/AdBannerHorizontal.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
.container {
  display: flex;  /* Enables Flexbox */
  justify-content: space-between;  /* Optional: adds space between items */
}

.box {
  text-align: center;
}
</style>