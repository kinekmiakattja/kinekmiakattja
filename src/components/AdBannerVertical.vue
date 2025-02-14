<template>
  <div class="ads-container">
    <!-- adbannervertical -->
    <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-6985347055044874"
      data-ad-slot="7628432361"
      data-ad-format="auto"
      data-full-width-responsive="true">
    </ins>
  </div>
</template>

<script>
import { onMounted } from 'vue';

  (adsbygoogle = window.adsbygoogle || []).push({});

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