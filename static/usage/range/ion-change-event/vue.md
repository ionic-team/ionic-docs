```html
<template>
  <ion-content>
    <ion-range @ionChange="onIonChange"></ion-range>
    <ion-label>ionChange emitted value: {{lastEmittedValue}}</ion-label>
  </ion-content>
</template>

<script lang="ts">
  import { IonContent, IonLabel, IonRange } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent, IonLabel, IonRange },
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
