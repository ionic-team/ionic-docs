```html
<template>
  <ion-list>
    <ion-item>
      <ion-label>Badges styled</ion-label>
      <ion-badge>1</ion-badge>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonBadge, IonItem, IonLabel, IonList } from '@ionic/vue';
</script>

<style>
  ion-badge {
    --background: purple;
    --color: white;
    --padding-end: 20px;
    --padding-start: 20px;
  }
</style>
```
