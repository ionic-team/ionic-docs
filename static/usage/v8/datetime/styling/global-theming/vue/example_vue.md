```html
<template>
  <ion-datetime color="rose"></ion-datetime>
</template>

<script lang="ts">
  import { IonDatetime } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonDatetime },
  });
</script>

<style>
  ion-datetime {
    --background: #fff1f2;
    --background-rgb: 255, 241, 242;

    border-radius: 16px;
    box-shadow: rgba(var(--ion-color-rose-rgb), 0.3) 0px 10px 15px -3px;
  }
</style>
```
