import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/LoginPage.vue';
import TrandingSection from '../components/TrandingSection.vue';// Assuming you have a Dashboard component

const routes = [
  { path: '/', component: TrandingSection },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
