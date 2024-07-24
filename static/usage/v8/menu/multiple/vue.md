```html
<template>
  <ion-menu menu-id="first-menu" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>First Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">This is the first menu content.</ion-content>
  </ion-menu>

  <ion-menu menu-id="second-menu" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Second Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">This is the second menu content.</ion-content>
  </ion-menu>

  <ion-menu side="end" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>End Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">This is the end menu content.</ion-content>
  </ion-menu>

  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>Tap a button below to open a specific menu.</p>

      <ion-button expand="block" @click="openFirstMenu()">Open First Menu</ion-button>
      <ion-button expand="block" @click="openSecondMenu()">Open Second Menu</ion-button>
      <ion-button expand="block" @click="openEndMenu()">Open End Menu</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonHeader, IonMenu, IonPage, IonTitle, IonToolbar, menuController } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton, IonContent, IonHeader, IonMenu, IonPage, IonTitle, IonToolbar, menuController },
    setup() {
      const openFirstMenu = async () => {
        /**
         * Open the menu by menu-id
         * We refer to the menu using an ID
         * because multiple "start" menus exist.
         */
        await menuController.open('first-menu');
      };

      const openSecondMenu = async () => {
        /**
         * Open the menu by menu-id
         * We refer to the menu using an ID
         * because multiple "start" menus exist.
         */
        await menuController.open('second-menu');
      };

      const openEndMenu = async () => {
        /**
         * Open the menu by side
         * We can refer to the menu by side
         * here because only one "end" menu exists
         */
        await menuController.open('end');
      };

      return { openFirstMenu, openSecondMenu, openEndMenu };
    },
  });
</script>
```
