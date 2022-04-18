```vue
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Modal</ion-title>
      <ion-button slot="end" fill="clear" @click="dismiss">Dismiss</ion-button>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding"> This is an example of a controller full-height modal. </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, modalController } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonButton },
  methods: {
    dismiss() {
      return modalController.dismiss();
    },
  },
});
</script>
```
