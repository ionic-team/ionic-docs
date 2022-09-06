```html
<template>
  <ion-item href="#" @click="testClick($event)">
    <ion-label>Anchor Item</ion-label>
  </ion-item>

  <ion-item href="#" disabled="true" @click="testClick($event)">
    <ion-label>Disabled Anchor Item</ion-label>
  </ion-item>

  <ion-item button @click="testClick($event)">
    <ion-label>Button Item</ion-label>
  </ion-item>

  <ion-item button disabled="true" @click="testClick($event)">
    <ion-label>Disabled Button Item</ion-label>
  </ion-item>
</template>

<script lang="ts">
  import { IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel },
    methods: {
      testClick(ev: Event) {
        console.log('Clicked item: ', ev.target.textContent.trim());
      },
    },
  });
</script>
```
