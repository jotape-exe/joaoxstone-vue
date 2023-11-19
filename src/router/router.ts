// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import About from '../components/About.vue';
import Me from '../components/Me.vue';
import Projects from '../pages/Projects.vue';
import index from '../pages/index.vue';


const routes = [
  { 
    path: '/',
    name: 'index',
    component: index 
  },
  { 
    path: '/projects',
    name: 'Projects',
    component: Projects
   },
  {
    path: '/recomendations',
    name: 'Recomendations',
    component: About 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
