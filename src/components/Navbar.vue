<template>
  <nav class="navbar">
    <div class="nav-left container">
      <div class="box">
        <router-link to="/" class="logo">
          <img :src="sitelogo" alt="App Logo" class="logo" />
        </router-link>
      </div>
    </div>
    <div class="nav-middle"> 
    </div>
    <div class="nav-right container">
      <div class="box">
        <LanguageSwitcher />
      </div>
      <div class="box">
        <router-link to="/profile" class="profile-button">
          <img :src="profilelogo" alt="Profile Logo" class="logo" />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import sitelogo from '@/assets/owl-logo.png';
import profilelogo from '@/assets/profile-logo.png';
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';
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

.logo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.container {
  display: flex;
  gap: 10px; /* Adds spacing between the boxes */
}

.box {
  padding: 20px;
}

.button {
  height: 30px;
}
</style>