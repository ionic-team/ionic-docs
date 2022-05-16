```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-button slot="start" fill="clear" color="medium" @click="cancel">Cancel</ion-button>
      <ion-title>Modal</ion-title>
      <ion-button slot="end" fill="clear" @click="confirm">Confirm</ion-button>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
      <ion-label position="stacked">Your name</ion-label>
      <ion-input v-model="name" placeholder="Your name"></ion-input>
    </ion-item>
  </ion-content>
</template>

<script>
  import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
    modalController,
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Modal',
    components: { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput },
    methods: {
      cancel() {
        return modalController.dismiss(null, 'cancel');
      },
      confirm() {
        return modalController.dismiss(this.name, 'confirm');
      },
    },
  });
</script>
```
