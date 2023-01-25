```html
<template>
  <ion-list>
    <ion-item-group>
      <ion-item-divider>
        <ion-label>
          Section A
        </ion-label>
      </ion-item-divider>

      <ion-item>
        <ion-label>A1</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>A2</ion-label>
      </ion-item>
      <ion-item lines="none">
        <ion-label>A3</ion-label>
      </ion-item>
    </ion-item-group>

    <ion-item-group>
      <ion-item-divider>
        <ion-label>
          Section B
        </ion-label>
      </ion-item-divider>

      <ion-item>
        <ion-label>B1</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>B2</ion-label>
      </ion-item>
      <ion-item lines="none">
        <ion-label>B3</ion-label>
      </ion-item>
    </ion-item-group>
  </ion-list>
</template>

<script lang="ts">
  import { IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList },
  });
</script>
```
