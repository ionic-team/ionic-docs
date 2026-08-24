```html
<template>
  <ion-content class="ion-padding">
    <h1>Page Three</h1>
    <ion-button @click="navigateBack">Go Back</ion-button>
    <ion-button @click="navigateToRoot">Go to Root</ion-button>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonContent, IonButton } from '@ionic/vue';

  interface Props {
    nav: any;
  }

  const props = defineProps<Props>();

  const navigateBack = () => {
    const { nav } = props;
    nav.pop();
  };

  const navigateToRoot = () => {
    const { nav } = props;
    nav.popToRoot();
  };
</script>
```
