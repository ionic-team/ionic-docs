```html
<template>
  <ion-range aria-label="Range with ionChange" @ionChange="onIonChange"></ion-range>
</template>

<script lang="ts">
  import { IonRange } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonRange },
    methods: {
      onIonChange({ detail }) {
        console.log('ionChange emitted value: ' + detail.value);
      },
    },
  });
</script>
```
