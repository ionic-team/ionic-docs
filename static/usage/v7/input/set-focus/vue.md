```html
<template>
  <ion-page>
    <ion-list>
      <ion-item>
        <ion-button @click="setFocus">Click to set focus</ion-button>
      </ion-item>
      <ion-item>
        <ion-input ref="input" label="Email" labelPlacement="floating"></ion-input>
      </ion-item>
    </ion-list>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonInput, IonItem, IonList, IonButton, IonPage } from '@ionic/vue';
  import { ref } from 'vue';

  const input = ref();

  function setFocus() {
    input.value.$el.setFocus();
  }
</script>
```
