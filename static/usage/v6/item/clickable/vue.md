```html
<template>
  <ion-item href="#">
    <ion-label>Anchor Item</ion-label>
  </ion-item>

  <ion-item href="#" disabled="true">
    <ion-label>Disabled Anchor Item</ion-label>
  </ion-item>

  <ion-item button>
    <ion-label>Button Item</ion-label>
  </ion-item>

  <ion-item button disabled="true">
    <ion-label>Disabled Button Item</ion-label>
  </ion-item>
</template>

<script lang="ts">
  import { IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel },
  });
</script>
```
