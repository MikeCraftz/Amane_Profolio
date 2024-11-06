import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import GalleryPage from '../components/GalleryPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/gallery', component: GalleryPage }
];

const router = createRouter({
  history: createWebHashHistory('/Amane_Profolio/'),
  routes
});

export default router;