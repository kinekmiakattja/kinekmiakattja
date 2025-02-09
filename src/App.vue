<template>
  <Header />
  <router-view />
  <AdBanner />
  <Footer />
</template>

<script setup>
import AdBanner from '@/components/AdBanner.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
</style>