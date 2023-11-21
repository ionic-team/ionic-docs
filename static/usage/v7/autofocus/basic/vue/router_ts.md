```ts
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Example from './components/Example.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Example,
  },
];

const router = createRouter({
  // Use: createWebHistory(process.env.BASE_URL) in your app
  history: createWebHistory(),
  routes,
});

export default router;
```
