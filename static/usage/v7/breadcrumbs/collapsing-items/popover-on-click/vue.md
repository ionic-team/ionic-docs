```html
<template>
  <ion-breadcrumbs :max-items="4" @ionCollapsedClick="presentPopover($event)">
    <ion-breadcrumb href="#home">Home</ion-breadcrumb>
    <ion-breadcrumb href="#electronics">Electronics</ion-breadcrumb>
    <ion-breadcrumb href="#photography">Photography</ion-breadcrumb>
    <ion-breadcrumb href="#cameras">Cameras</ion-breadcrumb>
    <ion-breadcrumb href="#film">Film</ion-breadcrumb>
    <ion-breadcrumb href="#35mm">35 mm</ion-breadcrumb>
  </ion-breadcrumbs>
  <ion-popover :is-open="popoverOpen" :event="event" @didDismiss="popoverOpen = false">
    <ion-content>
      <ion-list>
        <ion-item
          v-for="(breadcrumb, i) in collapsedBreadcrumbs"
          :href="breadcrumb.href"
          :lines="i === collapsedBreadcrumbs.length - 1 ? 'none' : undefined"
        >
          <ion-label>{{ breadcrumb.textContent }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-popover>
</template>

<script lang="ts" setup>
  import { IonBreadcrumb, IonBreadcrumbs, IonContent, IonItem, IonLabel, IonList, IonPopover } from '@ionic/vue';
  import Popover from './Popover.vue';
  import { ref } from 'vue';

  const popoverOpen = ref(false);
  const collapsedBreadcrumbs = ref([]);
  const event = ref(null);

  function presentPopover(e: Event) {
    this.collapsedBreadcrumbs = (e as CustomEvent).detail.collapsedBreadcrumbs;
    this.event = e;
    this.popoverOpen = true;
  }
</script>
```
