// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import KattSelection from '@/views/KattSelection.vue';
import Religion from '@/views/Religion.vue';
import Horoscope from '@/views/Horoscope.vue';
import Personality from '@/views/Personality.vue';
import Nationality from '@/views/Nationality.vue';
import Sexuality from '@/views/Sexuality.vue';
import ChineseHoroscope from '@/views/ChineseHoroscope.vue';
import GreekMithology from '@/views/GreekMithology.vue';
import RomanMithology from '@/views/RomanMithology.vue';
import Other from '@/views/Other.vue';
import Profile from '@/views/Profile.vue';

const routes = [
  { path: '/', redirect: '/kattok' },
  { path: '/kattok', component: KattSelection },
  { path: '/vallas', component: Religion },
  { path: '/horoszkop', component: Horoscope },
  { path: '/szemelyisegtipus', component: Personality },
  { path: '/nemzetiseg', component: Nationality },
  { path: '/szexualitas', component: Sexuality },
  { path: '/kinaihoroszkop', component: ChineseHoroscope },
  { path: '/gorogmitologia', component: GreekMithology },
  { path: '/romaimitologia', component: RomanMithology },
  { path: '/egyeb', component: Other },
  { path: '/profile', component: Profile },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;