<template>
    <table class="table">
      <tbody>
        <tr>
          <!-- Language switcher -->
          <td><button @click="changeLanguage('hu')" class="button">Magyar</button></td>
          <td><button @click="changeLanguage('en')" class="button">English</button></td>
          <td><button @click="buttonOtherClicked()" class="button">...</button></td>
        </tr>
      </tbody>
    </table>
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