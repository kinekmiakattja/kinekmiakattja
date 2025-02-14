<template>
    <div>
        <table class="table">
          <tbody>
            <tr>
              <!-- Language switcher -->
              <td><button @click="changeLanguage('hu')" class="button">🇭🇺 Magyar</button></td>
              <td><button @click="changeLanguage('en')" class="button">🇬🇧 English</button></td>
            </tr>
          </tbody>
        </table> 
    </div>
</template>
  
<script setup lang="ts">
import { useI18n } from 'vue-i18n';  // Import useI18n hook
  
// Access i18n instance
const { locale } = useI18n();  // This gives you the 'locale' reactive property
  
// Function to change the language
const changeLanguage = (lang: string) => {
    locale.value = lang;  // Dynamically set the new locale
};
</script>

<style scoped>
.button {
    height: 30px;
}
</style>