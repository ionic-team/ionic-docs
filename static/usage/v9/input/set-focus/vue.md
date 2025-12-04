```html
<template>
  <ion-list>
    <ion-item>
      <ion-button @click="setFocus">Click to set focus</ion-button>
    </ion-item>
    <ion-item>
      <ion-input ref="input" label="Email" label-placement="floating"></ion-input>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonInput, IonItem, IonList, IonButton } from '@ionic/vue';
  import { ref } from 'vue';

  const input = ref();

  function setFocus() {
    input.value.$el.setFocus();
  }
</script>
```
