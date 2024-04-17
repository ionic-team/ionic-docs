```html
<template>
  <ion-datetime value="2023-11-02T01:22:00" :format-options="formatOptions">
    <span slot="title">Select Date</span>
  </ion-datetime>
</template>

<script lang="ts" setup>
  import { IonDatetime } from '@ionic/vue';
  import { defineComponent } from 'vue';

  const formatOptions = {
    time: { hour: '2-digit', minute: '2-digit' },
    date: { day: '2-digit', month: 'long' },
  };
</script>
```
