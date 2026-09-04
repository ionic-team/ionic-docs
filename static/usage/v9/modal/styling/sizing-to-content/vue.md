```vue
<style>
ion-modal {
  --height: fit-content;
  --width: 90%;
  --border-radius: 8px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
}
</style>

<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">Open Modal</ion-button>

    <ion-modal ref="modal" trigger="open-modal">
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="dismiss()">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list lines="full">
          <ion-item v-for="item in ['Item 1', 'Item 2', 'Item 3']" :key="item">
            <ion-label>{{ item }}</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { ref } from 'vue';

const modal = ref();

const dismiss = () => modal.value.$el.dismiss();
</script>
```
