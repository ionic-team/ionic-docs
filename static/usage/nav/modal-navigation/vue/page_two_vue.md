```html
<template>
  <ion-content class="ion-padding">
    <h1>Page Two</h1>
    <ion-button @click="navigateToPageThree">Go to Page Three</ion-button>
  </ion-content>
</template>

<script lang="ts">
  import { IonContent, IonButton } from '@ionic/vue';
  import PageThree from './PageThree.vue';

  export default {
    components: { IonContent, IonButton },
    props: ['nav'],
    methods: {
      navigateToPageThree() {
        const { nav } = this;
        nav.push(PageThree, { nav });
      },
    },
  };
</script>
```
