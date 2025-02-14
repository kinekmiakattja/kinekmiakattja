<template>
  <div ref="adContainer" class="ads-container">
    <ins class="adsbygoogle"
      style="display:block; width:100%; min-height:250px;"
      data-ad-client="ca-pub-6985347055044874"
      data-ad-slot="7628432361"
      data-ad-format="auto"
      data-full-width-responsive="true">
    </ins>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";

const adContainer = ref<HTMLElement | null>(null);

const loadAd = () => {
  if (window.adsbygoogle && adContainer.value) {
    // Check if the ad is already loaded within the container
    if (!adContainer.value.dataset.adLoaded) {
      adContainer.value.dataset.adLoaded = "true"; // Prevent multiple loads
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }
};

onMounted(async () => {
  await nextTick(); // Ensure DOM updates first
  setTimeout(loadAd, 1500); // Delay ad loading slightly to avoid errors
});
</script>

<style scoped>
.ads-container {
  width: 100%;
  min-height: 250px;
  text-align: center;
}
</style>