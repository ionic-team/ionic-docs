```html
<template>
  <ion-button @click="openPopover($event)">Click Me</ion-button>
  <ion-popover :is-open="popoverOpen" :event="event" @didDismiss="popoverOpen = false">
    <ion-content class="ion-padding">Hello World!</ion-content>
  </ion-popover>
</template>

<script setup lang="ts">
  import { IonButton, IonContent, IonPopover } from '@ionic/vue';
  import { ref } from 'vue';

  const popoverOpen = ref(false);
  const event = ref(null);

  const openPopover = (e: Event) => {
    event.value = e;
    popoverOpen.value = true;
  };
</script>
```
