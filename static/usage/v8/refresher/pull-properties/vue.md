```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Pull to Refresh</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <ion-refresher slot="fixed" :pull-factor="0.5" :pull-min="100" :pull-max="200" @ionRefresh="handleRefresh($event)">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>

    <p>Pull this content down to trigger the refresh.</p>
  </ion-content>
</template>

<script setup lang="ts">
  import {
    IonContent,
    IonHeader,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
    RefresherCustomEvent,
  } from '@ionic/vue';

  const handleRefresh = (event: RefresherCustomEvent) => {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };
</script>
```
