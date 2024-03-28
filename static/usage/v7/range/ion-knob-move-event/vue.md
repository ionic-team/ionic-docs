```html
<template>
  <ion-range
    aria-label="Range with knob events"
    @ionKnobMoveStart="onIonKnobMoveStart"
    @ionKnobMoveEnd="onIonKnobMoveEnd"
  ></ion-range>
</template>

<script lang="ts" setup>
  import { IonRange } from '@ionic/vue';

  function onIonKnobMoveStart({ detail }) {
    console.log('ionKnobMoveStart:', detail.value);
  }

  function onIonKnobMoveEnd({ detail }) {
    console.log('ionKnobMoveEnd:', detail.value);
  }
</script>
```
