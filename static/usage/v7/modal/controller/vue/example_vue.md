```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Controller Modal</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button expand="block" @click="openModal">Open Modal</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
  import { IonButton, IonContent, IonPage, IonHeader, IonToolbar, IonTitle, modalController } from '@ionic/vue';
  import Modal from './Modal.vue';

  const openModal = async () => {
    const modal = await modalController.create({
      component: Modal,
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log(`Hello, ${data}!`);
    }
  };
</script>
```
