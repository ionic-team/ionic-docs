```html
<template>
  <ion-content class="ion-padding">
    <h1>Page One</h1>
    <ion-button @click="navigateToPageTwo">Go to Page Two</ion-button>
  </ion-content>
</template>

<script lang="ts">
  import { IonContent, IonButton } from '@ionic/vue';
  import PageTwo from './PageTwo.vue';

  export default {
    components: { IonContent, IonButton },
    props: ['nav'],
    methods: {
      navigateToPageTwo() {
        const { nav } = this;
        nav.push(PageTwo, { nav });
      },
    },
  };
</script>
```
