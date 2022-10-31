```html
<template>
  <ion-router-outlet></ion-router-outlet>
</template>

<script lang="ts">
  import { IonRouterOutlet } from '@ionic/vue';
  import { createRouter, createWebHistory } from '@ionic/vue-router';
  import { RouteRecordRaw } from 'vue-router';

  import PageOne from './PageOne.vue';
  import PageTwo from './PageTwo.vue';

  export default {
    components: { IonRouterOutlet },
    setup() {
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
        history: createWebHistory(process.env.BASE_URL),
        routes,
      });

      return {
        router
      };
    },
  };
</script>
```
