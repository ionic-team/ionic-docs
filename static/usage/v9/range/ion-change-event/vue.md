```html
<template>
  <ion-range aria-label="Range with ionChange" @ionChange="onIonChange"></ion-range>
</template>

<script setup lang="ts">
  import { IonRange } from '@ionic/vue';

  const onIonChange = ({ detail }) => {
    console.log('ionChange emitted value: ' + detail.value);
  };
</script>
```
