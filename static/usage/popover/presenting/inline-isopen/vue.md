```html
<template>
  <ion-button @click="openPopover($event)">Click Me</ion-button>
  <ion-popover
    :is-open="popoverOpen"
    @didDismiss="popoverOpen = false"
    :event="event"
  >
    <ion-content class="ion-padding">Hello World!</ion-content>
  </ion-popover>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonPopover } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton, IonContent, IonPopover },
    data() {
      return {
        popoverOpen: false,
        event: null
      }
    },
    methods: {
      openPopover(e) {
        this.event = e;
        this.popoverOpen = true;
      }
    }
  });
</script>
```
