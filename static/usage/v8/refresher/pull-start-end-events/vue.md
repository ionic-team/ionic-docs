```vue
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Pull to Refresh</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <ion-refresher
      id="refresher"
      slot="fixed"
      @ionPullStart="handlePullStart()"
      @ionPullEnd="handlePullEnd($event)"
      @ionRefresh="handleRefresh($event)"
    >
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>

    <p>Pull this content down to trigger the refresh.</p>

    <ion-list lines="full">
      <ion-item v-for="item in items" :key="item.label">
        <ion-checkbox slot="start" v-model="item.checked" :disabled="item.disabled"></ion-checkbox>
        <ion-label>{{ item.label }}</ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherCustomEvent,
  RefresherPullEndCustomEvent,
} from '@ionic/vue';

const items = ref([
  { label: 'Finalize Q1 budget proposal', checked: false, disabled: false },
  { label: 'Review design mockups', checked: true, disabled: false },
  { label: 'Sync with engineering on API docs', checked: true, disabled: false },
  { label: 'Approve PTO requests for March', checked: false, disabled: false },
  { label: 'Draft monthly newsletter', checked: false, disabled: false },
]);

const handlePullStart = () => {
  console.log('Pull started');

  // Disable the checkboxes when the pull starts
  items.value.forEach((item) => {
    item.disabled = true;
  });
};

const handlePullEnd = (event: RefresherPullEndCustomEvent) => {
  console.log('Pull ended with reason: "' + event.detail.reason + '"');

  // Enable the checkboxes when the pull ends
  items.value.forEach((item) => {
    item.disabled = false;
  });
};

const handleRefresh = (event: RefresherCustomEvent) => {
  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
    console.log('Refresh completed');
  }, 2000);
};
</script>
```
