<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Egyéb téma javaslása:</label>
        <input type="text" id="other" v-model="formData.other" required />
      </div>
      
      <button type="submit">Küldés</button>
    </form>

    <div v-if="submitted">
      <h3>Javaslat elküldve</h3>
      <p>Javasolt téma: {{ formData.other }}</p>
    </div>

    <button @click="goHome" class="button">Kilépés</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/');  // Navigates to the home page (root route)
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

button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.button {
  width: 200px;
  height: 50px;
  background-color: cadetblue;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  background-color: #2980b9;
  transform: scale(1.1);
}

.button:active {
  transform: scale(1);
  background-color: #1c6691;
}
</style>