```html
<template>
  <ion-button @click="showMode">Show Current Mode</ion-button>
  <div class="mode-value" v-if="modeValue">Current mode: {{ modeValue }}</div>
</template>

<script setup>
  import { ref } from 'vue';
  import { getMode } from '@ionic/core';

  const modeValue = ref('');

  function showMode() {
    modeValue.value = getMode();
  }
</script>
```
