```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Example</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">Open Modal</ion-button>
    <ion-modal ref="modal" :keep-contents-mounted="true" trigger="open-modal">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button @click="close()">Cancel</ion-button>
          </ion-buttons>
          <ion-title>Modal</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        This content was mounted as soon as the modal was created.
      </ion-content>
    </ion-modal>
  </ion-content>
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
  } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: {
      IonButtons,
      IonButton,
      IonModal,
      IonHeader,
      IonContent,
      IonToolbar,
      IonTitle,
    },
    methods: {
      close() {
        this.$refs.modal.$el.dismiss();
      },
    },
  });
</script>
```
