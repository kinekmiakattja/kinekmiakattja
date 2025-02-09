<template>
  <Header />
  <main class="flex-grow flex items-center justify-center p-4">
    <router-view />
  </main>
  <AdBanner class="absolute bottom-0 left-0 w-full" />
  <Footer />
</template>

<script setup>
import AdBanner from '@/components/AdBanner.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
AdBanner {
  position: bottom;
}
</style>