<template>
  <div class="app-container">
    <Navbar />
    <div class="content">
      <div class="title"><h1>{{ t('slogan') }}</h1><hr /></div>
      <div class="container">
        <div class="box"><router-view /></div>
      </div>
      <div ref="adContainer" class="ads-container"><AdBannerHorizontal /></div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import AdBannerVertical from '@/components/AdBannerVertical.vue';
import AdBannerHorizontal from '@/components/AdBannerHorizontal.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import { useI18n } from 'vue-i18n';
import { onMounted, ref } from "vue";

const { t } = useI18n(); // Get the `t` function

const adContainer = ref<HTMLElement | null>(null);

const loadAd = () => {
  if (window.adsbygoogle && adContainer.value) {
    if (!adContainer.value.dataset.loaded) {
      adContainer.value.dataset.loaded = "true"; // Mark as loaded
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }
};

onMounted(() => {
  setTimeout(loadAd, 1500); // Delay to ensure proper loading
});
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full height of the viewport */
}

.content {
  flex: 1; /* Takes up remaining space, pushing the footer down */
  display: flex;
  flex-direction: column;
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
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  flex: 1;
}

.ads-container {
  display: block !important;
  visibility: visible !important;
  min-height: 90px;
  background-color: transparent;
}

footer {
  margin-top: auto;
}
</style>