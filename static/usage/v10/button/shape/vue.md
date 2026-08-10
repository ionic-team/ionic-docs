```html
<template>
  <ion-button>Default</ion-button>
  <ion-button shape="round">Round</ion-button>
  <ion-button>
    <ion-icon slot="icon-only" :icon="heart"></ion-icon>
  </ion-button>
  <ion-button shape="round">
    <ion-icon slot="icon-only" :icon="heart"></ion-icon>
  </ion-button>
</template>

<script setup lang="ts">
  import { IonButton, IonIcon } from '@ionic/vue';
  import { heart } from 'ionicons/icons';
</script>
```
