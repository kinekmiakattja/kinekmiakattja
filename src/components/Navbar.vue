<template>
  <nav class="navbar">
    <div class="nav-left">
      <router-link to="/" class="logo">KinekMiAKattja</router-link>
    </div>
    <div class="nav-middle">
      <table class="table">
        <tbody>
          <tr>
            <!-- Language switcher -->
            <td><button @click="changeLanguage('hu')" class="navbarButton">🇭🇺 Magyar</button></td>
            <td><button @click="changeLanguage('en')" class="navbarButton">🇬🇧 English</button></td>
        </tr>
      </tbody>
    </table>  
    </div>
    <div class="nav-right">
      <router-link to="/profile" class="profile-button">
        <img v-if="profile.avatar" :src="profile.avatar" alt="Profile" class="profile-avatar" />
        <span v-else>Profil</span>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const profile = ref({ avatar: '' });

const changeLanguage = (lang) => {
    locale.value = lang;  // Change language on button click
    router.push('/kattok');
};

// Load profile from localStorage
onMounted(() => {
  const savedProfile = JSON.parse(localStorage.getItem('profile'));
  if (savedProfile) {
    profile.value = savedProfile;
  }
});
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background: #333;
  color: white;
}
.profile-button {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
}
.profile-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>