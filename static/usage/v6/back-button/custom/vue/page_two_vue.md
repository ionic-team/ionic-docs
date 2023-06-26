```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button text="Previous" :icon="caretBack"></ion-back-button>
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
  import { IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonBackButton } from '@ionic/vue';
  import { caretBack } from 'ionicons/icons';

  export default {
    components: { IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonBackButton },
    setup() {
      return { caretBack };
    },
  };
</script>
```
