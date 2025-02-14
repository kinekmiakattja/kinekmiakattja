<template>
  <div ref="adContainer" class="ads-container">
    <ins class="adsbygoogle"
      style="display:block; width:100%; min-height:90px;"
      data-ad-client="ca-pub-6985347055044874"
      data-ad-slot="6071808119"
      data-ad-format="horizontal"
      data-full-width-responsive="true"
      :data-ad-loaded="adLoaded">
    </ins>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";

const adContainer = ref<HTMLElement | null>(null);
const adLoaded = ref(false); // Track if the ad has been loaded

const loadAd = () => {
  if (window.adsbygoogle && adContainer.value) {
    const adElement = adContainer.value.querySelector('.adsbygoogle');

    // Check if the ad has already been loaded by checking a custom attribute
    if (adElement && !adElement.hasAttribute('data-ad-loaded')) {
      adElement.setAttribute('data-ad-loaded', 'true'); // Mark as loaded
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      adLoaded.value = true; // Mark the ad as loaded in Vue state
    }
  }
};

onMounted(async () => {
  await nextTick(); // Ensure DOM updates first
  setTimeout(loadAd, 1500); // Delay to ensure ad container is visible
});
</script>

<style scoped>
.ads-container {
  width: 100%;
  min-height: 90px;
  text-align: center;
}
</style>