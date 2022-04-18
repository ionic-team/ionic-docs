```vue
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Inline Modal</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-button id="open-modal">Open Modal</ion-button>
    <ion-modal trigger="open-modal" :ref="modal">
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
          <ion-button slot="end" fill="clear" @click="dismiss()">Dismiss</ion-button>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding"> This is an example of an inline full-height modal. </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script>
import { IonButton, IonModal, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { IonButton, IonModal, IonHeader, IonToolbar, IonTitle },
  methods: {
    dismiss() {
      this.$refs.modal.$el.dismiss();
    },
  },
});
</script>
```
