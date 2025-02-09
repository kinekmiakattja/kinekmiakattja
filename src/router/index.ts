// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Religion from '../views/Religion.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/religion', component: Religion },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;