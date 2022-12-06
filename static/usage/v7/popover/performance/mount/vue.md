```html
<template>
  <ion-content>
    <ion-button id="open-popover">Open Popover</ion-button>
    <ion-popover :keep-contents-mounted="true" trigger="open-popover">
      <ion-content class="ion-padding">This content was mounted as soon as the popover was created.</ion-content>
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
```
