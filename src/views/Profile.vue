<template>
  <div class="profile-page">
    <h1>Profil módosítása</h1>
    <form @submit.prevent="saveProfile">
      <div class="form-group">
        <label for="name">Név:</label>
        <input v-model="profile.name" type="text" id="name" required />
      </div>

      <div class="form-group">
        <label for="gender">Nem:</label>
        <select v-model="profile.gender" id="gender" required>
          <option value="male">Férfi</option>
          <option value="female">Nő</option>
          <option value="other">Egyéb</option>
        </select>
      </div>

      <div class="form-group">
        <label for="age">Kor:</label>
        <input v-model="profile.age" type="number" id="age" required min="1" />
      </div>

      <button type="submit" class="button">Profil mentése</button>
    </form>

    <div v-if="savedProfile">
      <h2>Profilod</h2>
      <p><strong>Név:</strong> {{ savedProfile.name }}</p>
      <p><strong>Nem:</strong> {{ savedProfile.gender }}</p>
      <p><strong>Kor:</strong> {{ savedProfile.age }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Reactive state for the profile
const profile = ref({
  name: '',
  gender: 'male',
  age: null
});

// Reactive state to store saved profile
const savedProfile = ref(null);

// Save the profile
const saveProfile = () => {
  savedProfile.value = { ...profile.value }; // Save the profile data
  alert('Profil mentve!');
};
</script>

<style scoped>
.profile-page {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

h2 {
  text-align: center;
  margin-top: 20px;
}
</style>