```html
<template>
  <ion-item-group>
    <ion-item-divider>
      <ion-label>A</ion-label>
    </ion-item-divider>

    <ion-item>
      <ion-label>Angola</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Argentina</ion-label>
    </ion-item>
    <ion-item lines="none">
      <ion-label>Armenia</ion-label>
    </ion-item>
  </ion-item-group>

  <ion-item-group>
    <ion-item-divider>
      <ion-label>B</ion-label>
    </ion-item-divider>

    <ion-item>
      <ion-label>Bangladesh</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Belarus</ion-label>
    </ion-item>
    <ion-item lines="none">
      <ion-label>Belgium</ion-label>
    </ion-item>
  </ion-item-group>
</template>

<script lang="ts">
  import { IonItem, IonItemDivider, IonItemGroup, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonItemDivider, IonItemGroup, IonLabel },
  });
</script>
```
