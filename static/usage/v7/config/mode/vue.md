```html
<template>
  <div class="container">
    <ion-button :color="color" :fill="fill" @click="showMode"> {{ modeValue }} </ion-button>
    <div class="mode-value" v-if="modeValue">Current mode: {{ modeValue }}</div>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue';
  import { getMode } from '@ionic/core';

  const modeValue = ref('');

  function showMode() {
    modeValue.value = getMode();
  }

  const color = computed(() => (modeValue.value === 'ios' ? 'secondary' : 'tertiary'));
  const fill = computed(() => (modeValue.value === 'ios' ? 'outline' : 'solid'));

  onMounted(() => {
    modeValue.value = getMode();
  });
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mode-value {
    margin-top: 16px;
    font-weight: bold;
  }
</style>
```
