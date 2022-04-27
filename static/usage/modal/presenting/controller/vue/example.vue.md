```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Controller Modal</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button @click="openModal">Open Modal</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonButton, IonContent, IonPage, IonHeader, IonToolbar, IonTitle, modalController } from '@ionic/vue';
  import Modal from './Modal.vue';

  export default {
    components: { IonButton, IonContent, IonPage, IonHeader, IonToolbar, IonTitle },
    methods: {
      async openModal() {
        const modal = await modalController.create({
          component: Modal,
        });
        return modal.present();
      },
    },
  };
</script>
```
