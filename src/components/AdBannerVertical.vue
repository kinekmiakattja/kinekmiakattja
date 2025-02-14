<template>
  <div class="ads-container">
    <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
      data-ad-slot="XXXXXXXXXX"
      data-ad-format="auto"
      data-full-width-responsive="true">
    </ins>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  if (window.adsbygoogle) {
    window.adsbygoogle.push({});
  }
});
</script>

<style scoped>
.ads-container {
  width: 100%;
  text-align: center;
  margin: 10px 0;
}
</style>

<style scoped>
.advertisement {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  background-color: aqua;
  min-width: 100%;
}
</style>