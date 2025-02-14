<template>
  <div ref="adContainer" class="ads-container">
    <ins class="adsbygoogle"
      style="display:block; width:100%; min-height:90px;"
      data-ad-client="ca-pub-6985347055044874"
      data-ad-slot="6071808119"
      data-ad-format="horizontal"
      data-full-width-responsive="true">
    </ins>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";

const adContainer = ref<HTMLElement | null>(null);

const loadAd = () => {
  if (window.adsbygoogle && adContainer.value) {
    const adElement = adContainer.value.querySelector('.adsbygoogle');

    // Check if the ad element already has an ad (using the 'data-ad-loaded' attribute)
    if (adElement && !adElement.hasAttribute('data-ad-loaded')) {
      adElement.setAttribute('data-ad-loaded', 'true'); // Mark as loaded
      // Push the ad if it's not already loaded
      (window.adsbygoogle = window.adsbygoogle || []).push({});
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