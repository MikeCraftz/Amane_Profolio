import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import GalleryPage from '../components/GalleryPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/gallery', component: GalleryPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;