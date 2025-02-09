import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Import router
import './index.css';  // Ensure Tailwind is loaded

const app = createApp(App);
app.use(router);
app.mount('#app');