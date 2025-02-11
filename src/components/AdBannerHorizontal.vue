<template>
  <div class="ad-container">
    <ins 
      class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
      data-ad-slot="XXXXXXXXXX"
      data-ad-format="horizontal">
    </ins>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (window.adsbygoogle) {
    window.adsbygoogle.push({});
  }
});
</script>

<style scoped>
.ad-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
</style>