```html
<template>
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
</template>

<script setup lang="ts">
  import { markRaw } from 'vue';
  import { IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton } from '@ionic/vue';
  import PageTwo from './PageTwo.vue';

  const component = markRaw(PageTwo);
</script>
```
