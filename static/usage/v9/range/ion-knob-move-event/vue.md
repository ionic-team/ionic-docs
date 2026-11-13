```html
<template>
  <ion-range
    aria-label="Range with knob events"
    :dual-knobs="true"
    :value="{ lower: 20, upper: 80 }"
    @ionKnobMoveStart="onIonKnobMoveStart"
    @ionKnobMoveEnd="onIonKnobMoveEnd"
  ></ion-range>
</template>

<script setup lang="ts">
  import { IonRange } from '@ionic/vue';

  const onIonKnobMoveStart = ({ detail }) => {
    console.log('ionKnobMoveStart:', detail.knob, detail.position, detail.value);
  };

  const onIonKnobMoveEnd = ({ detail }) => {
    console.log('ionKnobMoveEnd:', detail.knob, detail.position, detail.value);
  };
</script>
```
