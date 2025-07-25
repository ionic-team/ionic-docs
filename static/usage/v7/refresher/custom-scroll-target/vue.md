```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Pull to Refresh</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content :scroll-y="false">
    <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>

    <div class="ion-content-scroll-host ion-padding">
      <p>Pull this content down to trigger the refresh.</p>
    </div>
  </ion-content>
</template>

<script lang="ts">
  import {
    IonContent,
    IonHeader,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
    RefresherCustomEvent,
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent, IonHeader, IonRefresher, IonRefresherContent, IonTitle, IonToolbar },
    setup() {
      const handleRefresh = (event: RefresherCustomEvent) => {
        setTimeout(() => {
          // Any calls to load data go here
          event.target.complete();
        }, 2000);
      };

      return { handleRefresh };
    },
  });
</script>

<style scoped>
  .ion-content-scroll-host {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }

  .ion-content-scroll-host::before,
  .ion-content-scroll-host::after {
    position: absolute;

    width: 1px;
    height: 1px;

    content: '';
  }

  .ion-content-scroll-host::before {
    bottom: -1px;
  }

  .ion-content-scroll-host::after {
    top: -1px;
  }
</style>
```
