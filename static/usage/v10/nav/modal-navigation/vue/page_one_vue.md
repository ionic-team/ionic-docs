```html
<template>
  <ion-content class="ion-padding">
    <h1>Page One</h1>
    <ion-button @click="navigateToPageTwo">Go to Page Two</ion-button>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonContent, IonButton } from '@ionic/vue';
  import PageTwo from './PageTwo.vue';

  interface Props {
    nav: any;
  }

  const props = defineProps<Props>();

  const navigateToPageTwo = () => {
    const { nav } = props;
    nav.push(PageTwo, { nav });
  };
</script>
```
