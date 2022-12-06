```html
<template>
  <ion-list>
    <ion-item>
      <ion-label>Default label</ion-label>
      <ion-input placeholder="Enter text"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="fixed">Fixed label</ion-label>
      <ion-input placeholder="Enter text"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Stacked label</ion-label>
      <ion-input placeholder="Enter text"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="floating">Floating label</ion-label>
      <ion-input placeholder="Enter text"></ion-input>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonLabel, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonLabel, IonList },
  });
</script>
```
