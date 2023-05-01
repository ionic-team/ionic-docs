```html
<style>
  ion-range {
    --bar-background: #a2d2ff;
    --bar-background-active: #bde0fe;
    --bar-height: 8px;
    --bar-border-radius: 8px;
    --knob-background: #ffc8dd;
    --knob-size: 40px;
    --pin-background: #ffafcc;
    --pin-color: #fff;
  }
</style>

<template>
  <ion-range :value="50" :pin="true"></ion-range>
</template>

<script lang="ts">
  import { IonRange } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonRange },
  });
</script>
```
