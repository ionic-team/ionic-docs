```typescript
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import PageOne from './components/PageOne.vue';
import PageTwo from './components/PageTwo.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/two',
  },
  {
    path: '/one',
    name: 'Page One',
    component: PageOne,
  },
  {
    path: '/two',
    name: 'Page Two',
    component: PageTwo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```
