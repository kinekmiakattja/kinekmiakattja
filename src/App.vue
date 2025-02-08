<script setup>
const handleClick = (button) => {
  alert(`Button ${button} clicked!`);
};
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
      <p class="text-lg text-gray-700 font-semibold">Reklám helye, szupec akciók meg ilyenek🎉</p>
    </div>
    <!-- Buttons Section -->
    <table class="table-auto bg-white p-6 rounded-lg shadow-lg">
      <tbody class="space-y-6">
        <tr class="space-x-6">
          <td><button @click="handleClick(1)" class="button">Vallás</button></td>
          <td><button @click="handleClick(2)" class="button">Horoszkóp</button></td>
          <td><button @click="handleClick(3)" class="button">Személyiség típus</button></td>
        </tr>
        <tr class="space-x-6">
          <td><button @click="handleClick(4)" class="button">Nemzetiség</button></td>
          <td><button @click="handleClick(5)" class="button">Szexualitás</button></td>
          <td><button @click="handleClick(6)" class="button">Kínai horoszkóp</button></td>
        </tr>
      </tbody>
    </table>
    <!-- Advertisement Section 2 -->
    <div class="advertisement w-full mt-10 bg-gray-200 text-center p-6">
      <p class="text-lg text-gray-700 font-semibold">Reklám helye, szupec akciók meg ilyenek🎉</p>
    </div>
  </div>
</template>

<style scoped>
/* Ensure all buttons have the same fixed size */
.button {
  width: 150px;  /* Fixed width for all buttons */
  height: 100px; /* Fixed height for all buttons */
  display: flex; /* Enable flexbox */
  justify-content: center; /* Center text horizontally */
  align-items: center; /* Center text vertically */
  text-align: center; /* Center text inside button */
}
</style>