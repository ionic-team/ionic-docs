```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Inline Modal</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <p class="ion-text-center">This is the main content</p>
    <ion-modal :is-open="isModalOpen">
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
    data() {
      return {
        isModalOpen: true,
      };
    },
    methods: {
      dismiss() {
        this.isModalOpen = false;
      },
    },
  });
</script>
```
