<script setup>
const handleClick = (button) => {
  alert(`Button ${button} clicked!`);
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="grid grid-cols-2 gap-4 p-6 bg-white rounded-lg shadow-lg">
      <button @click="handleClick(1)" class="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Button 1</button>
      <button @click="handleClick(2)" class="p-4 bg-green-500 text-white rounded-lg hover:bg-green-600">Button 2</button>
      <button @click="handleClick(3)" class="p-4 bg-red-500 text-white rounded-lg hover:bg-red-600">Button 3</button>
      <button @click="handleClick(4)" class="p-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">Button 4</button>
    </div>
  </div>
</template>

<style scoped>
/* Optional custom styles */
</style>