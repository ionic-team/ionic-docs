```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Modal</ion-title>
      <ion-button slot="end" fill="clear" @click="dismiss">Dismiss</ion-button>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
      <ion-label>Enter your name</ion-label>
      <ion-input ref="input" type="text" placeholder="Your name"></ion-input>
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
    IonInput,
    modalController,
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Modal',
    components: { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonInput },
    methods: {
      dismiss() {
        return modalController.dismiss(this.$refs.input.$el.value);
      },
    },
  });
</script>
```
