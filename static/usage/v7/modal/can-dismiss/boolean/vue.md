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

      <ion-modal ref="modal" trigger="open-modal" :can-dismiss="canDismiss" :presenting-element="page?.$el">
        <ion-header>
          <ion-toolbar>
            <ion-title>Modal</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="dismiss()">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <p class="ion-padding-horizontal">You must accept the terms and conditions to close this modal.</p>
          <ion-item>
            <ion-checkbox id="terms" @ionChange="onTermsChanged" :checked="canDismiss">
              <div class="ion-text-wrap">Do you accept the terms and conditions?</div>
            </ion-checkbox>
          </ion-item>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
  import {
    CheckboxCustomEvent,
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonCheckbox,
    IonPage,
  } from '@ionic/vue';
  import { ref } from 'vue';

  const modal = ref();
  const page = ref();
  const canDismiss = ref(false);

  function dismiss() {
    modal.value.$el.dismiss();
  }

  function onTermsChanged(ev: CheckboxCustomEvent) {
    canDismiss.value = ev.detail.checked;
  }
</script>
```
