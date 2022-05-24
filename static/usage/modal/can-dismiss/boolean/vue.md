```html
<template>
  <ion-page ref="page">
    <ion-header>
      <ion-toolbar>
        <ion-title>App</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button id="open-modal" expand="block">Open</ion-button>

      <ion-modal ref="modal" trigger="open-modal" :can-dismiss="canDismiss" :presenting-element="presentingElement">
        <ion-header>
          <ion-toolbar>
            <ion-title>Modal</ion-title>
            <ion-button slot="end" fill="clear" @click="dismiss()">Close</ion-button>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <p class="ion-padding-horizontal">You must accept the terms and conditions to close this modal.</p>
          <ion-item>
            <ion-label class="ion-text-wrap" for="terms">Do you accept the terms and conditions?</ion-label>
            <ion-checkbox id="terms" @ionChange="onTermsChanged" :checked="canDismiss"></ion-checkbox>
          </ion-item>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import {
    CheckboxCustomEvent,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonCheckbox,
    IonLabel,
    IonPage,
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonButton,
      IonModal,
      IonHeader,
      IonContent,
      IonToolbar,
      IonTitle,
      IonItem,
      IonCheckbox,
      IonLabel,
      IonPage,
    },
    data() {
      return {
        canDismiss: false,
        presentingElement: undefined,
      };
    },
    methods: {
      dismiss() {
        this.$refs.modal.$el.dismiss();
      },
      onTermsChanged(ev: CheckboxCustomEvent) {
        this.canDismiss = ev.detail.checked;
      },
    },
    mounted() {
      this.presentingElement = this.$refs.page.$el;
    },
  });
</script>
```
