```html
<template>
  <ion-content>
    <ion-button id="trigger-button">Click Me</ion-button>
    <ion-popover trigger="trigger-button">
      <ion-content>Hello Styled World!</ion-content>
    </ion-popover>
  </ion-content>
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
    --background: rgba(40, 173, 218, 0.6);
    --backdrop-opacity: 0.6;
    --box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.6);
    --color: white;
    --width: 300px;
  }

  ion-popover ion-content {
    --background: rgba(40, 173, 218, 0.6);
  }

  ion-popover::part(backdrop) {
    background-color: rgb(6, 14, 106);
  }
</style>
```
