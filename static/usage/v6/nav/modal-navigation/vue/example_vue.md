```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Modal Navigation</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button id="openModal">Open Modal</ion-button>
      <ion-modal ref="modal" trigger="openModal" @will-present="onWillPresent">
        <ion-header>
          <ion-toolbar>
            <ion-title>Modal</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="dismiss"> Close </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-nav ref="nav"></ion-nav>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { nextTick } from 'vue';
  import {
    IonNav,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonModal,
    IonButtons,
  } from '@ionic/vue';
  import PageOne from './PageOne.vue';

  export default {
    components: { IonNav, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal, IonButtons },
    methods: {
      dismiss() {
        this.$refs.modal.$el.dismiss();
      },
      async onWillPresent() {
        // Need to wait two ticks before the ref is set
        await nextTick();
        await nextTick();

        const nav = this.$refs.nav.$el;
        nav.setRoot(PageOne, { nav });
      },
    },
  };
</script>
```
