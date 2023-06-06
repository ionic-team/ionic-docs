```html
<template>
  <ion-button id="click-trigger">Left-Click Me</ion-button>
  <ion-popover trigger="click-trigger" trigger-action="click">
    <ion-content class="ion-padding">Hello World!</ion-content>
  </ion-popover>

  <ion-button id="context-menu-trigger">Right-Click Me</ion-button>
  <ion-popover trigger="context-menu-trigger" trigger-action="context-menu">
    <ion-content class="ion-padding">Hello World!</ion-content>
  </ion-popover>

  <ion-button id="hover-trigger">Hover Over Me</ion-button>
  <ion-popover trigger="hover-trigger" trigger-action="hover">
    <ion-content class="ion-padding">Hello World!</ion-content>
  </ion-popover>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonPopover } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton, IonContent, IonPopover },
  });
</script>
```
