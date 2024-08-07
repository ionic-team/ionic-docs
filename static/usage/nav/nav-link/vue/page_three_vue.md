```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>Page Three</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h1>Page Three</h1>
  </ion-content>
</template>

<script lang="ts">
  import { IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonBackButton } from '@ionic/vue';

  export default {
    components: { IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonBackButton },
  };
</script>
```
