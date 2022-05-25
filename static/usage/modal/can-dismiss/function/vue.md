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
            <ion-buttons slot="end">
              <ion-button @click="dismiss()">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <p>You will be prompted when closing this modal.</p>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonPage,
    actionSheetController,
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButtons, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage },
    data() {
      return {
        presentingElement: undefined,
      };
    },
    methods: {
      dismiss() {
        this.$refs.modal.$el.dismiss();
      },
      async canDismiss() {
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
      },
    },
    mounted() {
      this.presentingElement = this.$refs.page.$el;
    },
  });
</script>
```
