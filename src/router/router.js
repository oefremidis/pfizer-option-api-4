import { createMemoryHistory, createWebHistory, createRouter } from "vue-router";
import Home from '../components/pages/Home.vue';
import About from '../components/pages/About.vue';
import FileNotFound from '../components/pages/FileNotFound.vue'


const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/', redirect: '/home'},
  { path: '/:pathMatch(.*)*', component: FileNotFound}
]

// history: createMemoryHistory(),
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;