```html
<template>
  <ion-content class="ion-padding">
    <h1>Page Three</h1>
    <ion-button @click="navigateBack">Go Back</ion-button>
    <ion-button @click="navigateToRoot">Go to Root</ion-button>
  </ion-content>
</template>

<script lang="ts">
  import { IonContent, IonButton } from '@ionic/vue';

  export default {
    components: { IonContent, IonButton },
    props: ['nav'],
    methods: {
      navigateBack() {
        const { nav } = this;
        nav.pop();
      },
      navigateToRoot() {
        const { nav } = this;
        nav.popToRoot();
      },
    },
  };
</script>
```
