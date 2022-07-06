```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Page One</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Page One</h1>
      <ion-nav-link router-direction="forward" :component="component">
        <ion-button>Go to Page Two</ion-button>
      </ion-nav-link>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton } from '@ionic/vue';
  import PageTwo from './PageTwo.vue';

  export default {
    components: { IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton },
    data() {
      return {
        component: PageTwo,
      };
    },
  };
</script>
```
