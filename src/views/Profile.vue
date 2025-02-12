<template>
  <div class="profile-container">
    <h1>Saját profil</h1>
    <input v-model="profile.name" type="text" placeholder="Írd be a neved" />
    <input v-model="profile.avatar" type="text" placeholder="Avatar URL" />
    <button @click="saveProfile">Mentés</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const profile = ref({ name: '', avatar: '' });

onMounted(() => {
  const savedProfile = JSON.parse(localStorage.getItem('profile'));
  if (savedProfile) {
    profile.value = savedProfile;
  }
});

const saveProfile = () => {
  localStorage.setItem('profile', JSON.stringify(profile.value));
  router.push('/'); // Redirect to home after saving
};
</script>

<style scoped>
.profile-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  text-align: center;
}
input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
}
button {
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
</style>