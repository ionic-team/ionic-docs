```html
<template>
  <div class="container">
    <ion-button id="top-center">Side=Top, Alignment=Center</ion-button>
    <ion-popover trigger="top-center" side="top" alignment="center">
      <ion-content class="ion-padding">Hello World!</ion-content>
    </ion-popover>

    <ion-button id="bottom-start">Side=Bottom, Alignment=Start</ion-button>
    <ion-popover trigger="bottom-start" side="bottom" alignment="start">
      <ion-content class="ion-padding">Hello World!</ion-content>
    </ion-popover>

    <ion-button id="left-start">Side=Left, Alignment=Start</ion-button>
    <ion-popover trigger="left-start" side="left" alignment="start">
      <ion-content class="ion-padding">Hello World!</ion-content>
    </ion-popover>

    <ion-button id="right-end">Side=Right, Alignment=End</ion-button>
    <ion-popover trigger="right-end" side="right" alignment="end">
      <ion-content class="ion-padding">Hello World!</ion-content>
    </ion-popover>
  </div>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonPopover } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton, IonContent, IonPopover },
  });
</script>

<style>
  ion-popover {
    --width: 80px;
  }

  .container {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 80px;
  }
</style>
```
