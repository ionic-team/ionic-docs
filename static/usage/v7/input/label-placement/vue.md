```html
<template>
  <ion-list>
    <ion-item>
      <ion-input label="Default label" placeholder="Enter text"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Fixed label" label-placement="fixed" placeholder="Enter text"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Stacked label" label-placement="stacked" placeholder="Enter text"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Floating label" label-placement="floating" placeholder="Enter text"></ion-input>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonList },
  });
</script>
```
