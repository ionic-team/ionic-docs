```html
<template>
  <ion-range label-placement="start" label="Label at the Start"></ion-range>

  <br />

  <ion-range label-placement="end" label="Label at the End"></ion-range>

  <br />

  <ion-range label-placement="fixed" label="Fixed Width Label"></ion-range>

  <br />

  <ion-range label-placement="stacked" label="Stacked Label"></ion-range>
</template>

<script lang="ts">
  import { IonRange } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonRange },
  });
</script>
```
