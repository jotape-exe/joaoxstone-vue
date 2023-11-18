// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import About from '../components/About.vue';
import Me from '../components/Me.vue';
import Projects from '../components/Projects.vue';


const routes = [
  { 
    path: '/',
    name: 'Me',
    component: Me 
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
