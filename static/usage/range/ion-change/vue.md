```html
<template>
  <div>
    <ion-range @ionChange="onIonChange"></ion-range>
    <ion-label>ionChange emitted value: {{lastEmittedValue}}</ion-label>
  </div>
</template>

<script lang="ts">
  import { IonRange } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonRange },
    data() {
      return {
        lastEmittedValue: '',
      };
    },
    methods: {
      onIonChange({ detail }) {
        this.lastEmittedValue = detail.value;
      },
    },
  });
</script>
```
