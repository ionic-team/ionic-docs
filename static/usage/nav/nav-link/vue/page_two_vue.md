```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Page Two</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Page Two</h1>
      <ion-nav-link router-direction="forward" :component="component">
        <ion-button>Go to Page Three</ion-button>
      </ion-nav-link>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton } from '@ionic/vue';
  import PageThree from './PageThree.vue';

  export default {
    components: { IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton },
    data() {
      return {
        component: PageThree,
      };
    },
  };
</script>
```
