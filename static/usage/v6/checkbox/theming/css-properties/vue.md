```html
<template>
  <ion-item>
    <ion-checkbox slot="start"></ion-checkbox>
    <ion-label>Themed checkbox</ion-label>
  </ion-item>
</template>

<script lang="ts">
  import {
    IonCheckbox,
    IonItem,
    IonLabel
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonCheckbox,
      IonItem,
      IonLabel
    }
  });
</script>

<style>
  ion-checkbox {
    --size: 32px;
    --background-checked: #6815ec;
  }
  
  ion-checkbox::part(container) {
    border-radius: 6px;
    border: 2px solid #6815ec;
  }
</style>
```
