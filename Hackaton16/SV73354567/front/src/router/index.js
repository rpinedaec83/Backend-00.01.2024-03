import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Products from '../components/Products.vue';
import Payments from '../components/Payments.vue';
import Refunds from '../components/Refunds.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/payments', component: Payments },
  { path: '/refunds', component: Refunds }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;