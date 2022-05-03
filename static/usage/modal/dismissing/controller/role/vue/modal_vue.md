```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-button slot="start" fill="clear" @click="() => dismiss('cancel')">Cancel</ion-button>
      <ion-title>Modal</ion-title>
      <ion-button slot="end" fill="clear" @click="() => dismiss('confirm')">Dismiss</ion-button>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <p>Select a button to dismiss the modal.</p>
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
    IonInput,
    modalController,
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Modal',
    components: { IonContent, IonHeader, IonTitle, IonToolbar, IonButton },
    methods: {
      dismiss(role) {
        return modalController.dismiss(null, role);
      },
    },
  });
</script>
```
