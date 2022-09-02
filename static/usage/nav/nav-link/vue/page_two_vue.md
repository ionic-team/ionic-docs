```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>Page Two</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h1>Page Two</h1>
    <ion-nav-link router-direction="forward" :component="component">
      <ion-button>Go to Page Three</ion-button>
    </ion-nav-link>
  </ion-content>
</template>

<script lang="ts">
  import {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonNavLink,
    IonButton,
    IonButtons,
    IonBackButton,
  } from '@ionic/vue';
  import PageThree from './PageThree.vue';

  export default {
    components: {
      IonHeader,
      IonTitle,
      IonToolbar,
      IonContent,
      IonNavLink,
      IonButton,
      IonButtons,
      IonBackButton,
    },
    data() {
      return {
        component: PageThree,
      };
    },
  };
</script>
```
