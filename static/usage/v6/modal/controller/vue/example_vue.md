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
      <p>{{ message }}</p>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonPage, IonHeader, IonToolbar, IonTitle, modalController } from '@ionic/vue';
  import Modal from './Modal.vue';

  export default {
    components: { IonButton, IonContent, IonPage, IonHeader, IonToolbar, IonTitle },
    data() {
      return {
        message: 'This modal example uses the modalController to present and dismiss modals.',
      };
    },
    methods: {
      async openModal() {
        const modal = await modalController.create({
          component: Modal,
        });
        modal.present();

        const { data, role } = await modal.onWillDismiss();

        if (role === 'confirm') {
          this.message = `Hello, ${data}!`;
        }
      },
    },
  };
</script>
```
