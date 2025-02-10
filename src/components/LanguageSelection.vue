<template>
    <div class="container">
      <!-- Language switcher -->
      <button @click="changeLanguage('hu')">Magyar</button>
      <button @click="changeLanguage('en')">English</button>
      <button @click="buttonOtherClicked()">...</button>
    </div>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n';
  import { useRouter } from 'vue-router';
  
  const { t, locale } = useI18n();  // Destructure the i18n instance
  const router = useRouter();
  
  const changeLanguage = (lang) => {
    locale.value = lang;  // Change language on button click
    router.push('/kattok');
  };

  const buttonOtherClicked = () => {
    router.push('/egyeb');
  };
  </script>
  
  <style scoped>
  </style>