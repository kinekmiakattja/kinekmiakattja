<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <KattButtons class="mainbuttons" />
  </div>
</template>

<script setup>
import KattButtons from '@/components/KattButtons.vue';
</script>

<style scoped>
  .mainbuttons {
    bottom: 0;
    width: 100%;
    text-align: center;
  }
  </style>

