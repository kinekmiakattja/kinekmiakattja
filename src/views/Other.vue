<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Egyéb téma javaslása:</label>
        <input type="text" id="other" v-model="formData.other" required />
      </div>
      
      <button type="submit" class="button">Küldés</button>
    </form>

    <div v-if="submitted">
      <h3>Javaslat elküldve</h3>
      <p>Javasolt téma: {{ formData.other }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
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