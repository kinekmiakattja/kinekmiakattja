import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // If using Vue Router
import '@/assets/style.css'; // If using global styles

const app = createApp(App);
app.use(router);
app.mount('#app');