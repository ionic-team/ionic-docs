```html
<template>
  <ion-range aria-label="Range with ionChange" @ionChange="onIonChange"></ion-range>
</template>

<script lang="ts" setup>
  import { IonRange } from '@ionic/vue';

  function onIonChange({ detail }) {
    console.log('ionChange emitted value: ' + detail.value);
  }
</script>
```
