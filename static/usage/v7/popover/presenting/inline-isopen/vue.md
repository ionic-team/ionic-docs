```html
<template>
  <ion-button @click="openPopover($event)">Click Me</ion-button>
  <ion-popover :is-open="popoverOpen" :event="event" @didDismiss="popoverOpen = false">
    <ion-content class="ion-padding">Hello World!</ion-content>
  </ion-popover>
</template>

<script lang="ts" setup>
  import { IonButton, IonContent, IonPopover } from '@ionic/vue';
  import { ref } from 'vue';

  const popoverOpen = ref(false);
  const event = ref(null);

  function openPopover(e: Event) {
    this.event = e;
    this.popoverOpen = true;
  }
</script>
```
