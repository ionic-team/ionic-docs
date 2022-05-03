```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Controller Modal</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div>{{ message }}</div>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonButton, IonContent, IonPage, IonHeader, IonToolbar, IonTitle, modalController } from '@ionic/vue';
  import Modal from './Modal.vue';

  export default {
    components: { IonButton, IonContent, IonPage, IonHeader, IonToolbar, IonTitle },
    data() {
      return {
        message: '',
      };
    },
    methods: {
      async openModal() {
        const modal = await modalController.create({
          component: Modal,
        });
        modal.present();

        const { data } = await modal.onDidDismiss();

        this.message = `Hello, ${data}!`;
      },
    },
    mounted() {
      this.openModal();
    },
  };
</script>
```
