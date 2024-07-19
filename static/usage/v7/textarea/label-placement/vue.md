```html
<template>
  <ion-list>
    <ion-item>
      <ion-textarea label="Default label" placeholder="Enter text"></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-textarea label="Fixed label" label-placement="fixed" placeholder="Enter text"></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-textarea label="Stacked label" label-placement="stacked" placeholder="Enter text"></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-textarea label="Floating label" label-placement="floating" placeholder="Enter text"></ion-textarea>
    </ion-item>
  </ion-list>
</template>

<script lang="ts" setup>
  import { IonTextarea, IonItem, IonList } from '@ionic/vue';
</script>
```
