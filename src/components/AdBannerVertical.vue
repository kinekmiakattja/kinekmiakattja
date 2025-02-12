<template>
  <div class="advertisement">
    <p>REKLÁM</p>
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
.advertisement {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  background-color: aqua;
}
</style>