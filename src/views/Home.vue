<script setup>
import MainScreenButtons from '@/components/MainScreenButtons.vue';
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <!-- Motto Section -->
    <div class="text-4xl font-bold mb-4">
      <p>"Kattanj rá te is!"</p>
      <hr class="w-24 mt-2 border-2 border-gray-500" />
    </div>
    <!-- Advertisement Section -->
    <div class="advertisement w-full mt-10 bg-gray-200 text-center p-6">
      <p class="text-lg text-gray-700 font-semibold">Reklám helye, szuper akciók meg ilyenek🎉</p>
    </div>
    <!-- Buttons Section -->
    <MainScreenButtons />

    <!-- Advertisement Section 2 -->
    <div class="advertisement w-full mt-10 bg-gray-200 text-center p-6">
      <p class="text-lg text-gray-700 font-semibold">Itt is reklám, mégtöbb akció meg ilyenek🎉</p>
    </div>
  </div>
    
</template>

