```html
<template>
  <ion-content class="ion-padding">
    <ion-button id="open-toast">Open Toast</ion-button>
    <ion-toast
      message="This toast can be swiped to dismiss"
      trigger="open-toast"
      swipe-gesture="vertical"
      position="bottom"
      position-anchor="footer"
    ></ion-toast>
  </ion-content>
  <ion-footer id="footer">
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script setup lang="ts">
  import { IonButton, IonContent, IonFooter, IonTitle, IonToast, IonToolbar } from '@ionic/vue';
</script>
```
