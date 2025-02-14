<template>
  <div ref="adContainer" class="ads-container">
    <ins class="adsbygoogle"
      style="display:block; width:100%; min-height:250px;"
      data-ad-client="ca-pub-6985347055044874"
      data-ad-slot="7628432361"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";

const adContainer = ref<HTMLElement | null>(null);

const loadAd = () => {
  if (window.adsbygoogle && adContainer.value) {
    const adElement = adContainer.value.querySelector('.adsbygoogle');
    
    // Prevent ad from being loaded multiple times
    if (adElement && !adElement.hasAttribute('data-ad-loaded')) {
      adElement.setAttribute('data-ad-loaded', 'true'); // Mark the ad as loaded
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }
};

onMounted(async () => {
  await nextTick(); // Wait for DOM updates
  setTimeout(loadAd, 1500); // Delay to ensure ad container is visible
});
</script>

<style scoped>
.ads-container {
  width: 100%;
  min-height: 250px;
  text-align: center;
}
</style>