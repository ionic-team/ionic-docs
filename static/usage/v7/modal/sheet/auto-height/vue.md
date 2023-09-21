```html
<style>
  .block {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ion-modal {
    --height: auto;
  }
</style>

<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">Open Sheet Modal</ion-button>

    <ion-modal trigger="open-modal" :initial-breakpoint="1" :breakpoints="[0, 1]">
      <div class="block">Block of Content</div>
    </ion-modal>
  </ion-content>
</template>

<script lang="ts" setup>
  import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/vue';
</script>
```
