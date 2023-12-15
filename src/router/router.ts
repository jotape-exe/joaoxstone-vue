// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import About from '../components/About.vue';
import Me from '../components/Me.vue';
import Projects from '../pages/Projects.vue';
import index from '../pages/index.vue';
import Experience from '../pages/experience.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue'
import SimpleLayout from '../layouts/SimpleLayout.vue'



const routes = [
  { 
    path: '/',
    name: 'Deafult',
    component: SimpleLayout,
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'Home',
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
      {
        path: '/experience',
        name: 'Experience',
        component: Experience
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
