```html
<template>
  <ion-button :color="mode === 'ios' ? 'secondary' : 'tertiary'">
    Button
  </ion-button>
</template>

<script setup>
  import { getMode } from '@ionic/core';

  const mode = getMode(); 
</script>
```
