```html
<template>
  <ion-range
    aria-label="Range with knob events"
    @ionKnobMoveStart="onIonKnobMoveStart"
    @ionKnobMoveEnd="onIonKnobMoveEnd"
  ></ion-range>
</template>

<script lang="ts">
  import { IonRange } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonRange },
    methods: {
      onIonKnobMoveStart({ detail }) {
        console.log('ionKnobMoveStart:', detail.value);
      },
      onIonKnobMoveEnd({ detail }) {
        console.log('ionKnobMoveEnd:', detail.value);
      },
    },
  });
</script>
```
