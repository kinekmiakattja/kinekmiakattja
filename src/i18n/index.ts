import { createI18n } from 'vue-i18n';

// Define your translations
const messages = {
  en: {
    engslogan: 'Kattanj rá!',
  },
  hu: {
    hunslogen: 'Click on it!',
  },
  // Add more languages here...
};

// Create the i18n instance
const i18n = createI18n({
  legacy: false,  // Use Composition API
  locale: 'en',   // Set default locale
  messages,       // Pass the messages
});

export default i18n;