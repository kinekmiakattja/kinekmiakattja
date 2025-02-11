<template>
    <div class="form-container">
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">Profilod:</label>
          <input type="text" id="name" v-model="formData.name" />
        </div>
      </form>
  
      <div v-if="submitted">
        <h3>Profil mentve</h3>
        <p>Mentett adat: {{ formData.name }}</p>
      </div>
      <button type="submit">Mentés</button>
      <button @click="goBack" class="button">X</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const goBack = () => {
    router.back();  // Navigates to the home page (root route)
  };
  // Reactive data to store the form data
  const formData = ref({
    name: '',
    gender: ''
  });
  
  // Track if the form has been submitted
  const submitted = ref(false);
  
  // Handle form submission
  const handleSubmit = () => {
    submitted.value = true;
  };
  </script>
  
  <style scoped>
  .form-container {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"], input[type="radio"] {
    margin-bottom: 10px;
  }
  </style>