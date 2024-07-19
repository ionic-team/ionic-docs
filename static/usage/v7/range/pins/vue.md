```html
<template>
  <ion-range aria-label="Range with pin" :pin="true" :pin-formatter="pinFormatter"></ion-range>
</template>

<script lang="ts" setup>
  import { IonRange } from '@ionic/vue';

  const pinFormatter = (value: number) => `${value}%`;
</script>
```
