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

      <ion-modal
        ref="modal"
        trigger="open-modal"
        :can-dismiss="canDismiss"
        :presenting-element="presentingElement"
        @willPresent="willPresent"
      >
        <Child :modal="modal" @dismissChange="dismissChanged" />
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonPage,
    actionSheetController,
  } from '@ionic/vue';
  import Child from './Child.vue';
  import { onMounted, ref } from 'vue';

  const modal = ref();
  const page = ref();

  let canDismissOverride = false;

  const dismiss = () => {
    modal.value.dismiss();
  };

  const canDismiss = async () => {
    if (canDismissOverride) {
      // Checks for the override flag to return early if we can dismiss the overlay immediately
      return true;
    }
    const actionSheet = await actionSheetController.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });
    actionSheet.present();
    const { role } = await actionSheet.onWillDismiss();
    return role === 'confirm';
  };

  const willPresent = () => {
    // Resets the override when the modal is presented
    canDismissOverride = false;
  };

  const dismissChanged = () => {
    // Allows the modal to be dismissed based on the state of the checkbox
    canDismissOverride = true;
  };

  onMounted(() => {
    presentingElement.value = page.value;
  });
</script>
```
