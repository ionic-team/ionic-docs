```html
<style>
  ion-modal {
    background: rgba(0, 0, 0, 0.2);
  }
</style>

<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">Open</ion-button>

    <ion-modal ref="modal" trigger="open-modal" :can-dismiss="canDismiss" :swipe-to-close="true">
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
          <ion-button slot="end" fill="clear" @click="dismiss()">Close</ion-button>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p>You must accept the terms and conditions to close this modal.</p>
        <ion-item>
          <ion-label class="ion-text-wrap" for="terms">Do you accept the terms and conditions?</ion-label>
          <ion-checkbox id="terms" @ionChange="onTermsChanged" :checked="canDismiss"></ion-checkbox>
        </ion-item>
      </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script>
  import {
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonCheckbox,
    IonLabel,
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonCheckbox, IonLabel },
    data() {
      return {
        canDismiss: false,
      };
    },
    methods: {
      dismiss() {
        this.$refs.modal.$el.dismiss();
      },
      onTermsChanged(ev) {
        this.canDismiss = ev.detail.checked;
      },
    },
  });
</script>
```
