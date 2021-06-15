import { createWebHistory, createRouter } from "vue-router";
import home from './components/home.vue'
import company from './components/company.vue'
import product from './components/product.vue'

const routes = [
  {
    path: "/",
    component: home,
  },
  {
    path: "/company",
    component: company, 
  },
  {
    path: "/product",
    component: product, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 