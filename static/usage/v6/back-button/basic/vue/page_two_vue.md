```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>Back Button</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h1>Page Two</h1>
    <p>Use the back button to navigate to the previous page.</p>
  </ion-content>
</template>

<script lang="ts">
  import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';

  export default {
    components: { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar },
  };
</script>
```
