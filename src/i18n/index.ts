import { createI18n } from 'vue-i18n';

// Define your translations
const messages = {
  en: {
    slogan: 'Click on it too!',
  },
  hu: {
    slogan: 'Kattanj rá te is!',
  },
  // Add more languages here...
};

// Create the i18n instance
const i18n = createI18n({
  legacy: false,  // Use Composition API
  locale: 'hu',   // Set default locale
  messages,       // Pass the messages
});

export default i18n;