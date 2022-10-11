```html
<template>
  <b>Click on a shape to see the ripple</b>

  <div class="ion-activatable ripple-parent rectangle">
    <ion-ripple-effect></ion-ripple-effect>
  </div>

  <div class="ion-activatable ripple-parent rounded-rectangle">
    <ion-ripple-effect></ion-ripple-effect>
  </div>

  <div class="ion-activatable ripple-parent circle">
    <ion-ripple-effect></ion-ripple-effect>
  </div>
</template>

<script lang="ts">
  import { IonRippleEffect } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonRippleEffect },
  });
</script>

<style scoped>
  .ripple-parent {
    position: relative;
    overflow: hidden;

    border: 1px solid #ddd;
  }

  .rectangle {
    width: 300px;
    height: 150px;
  }

  .rounded-rectangle {
    width: 185px;
    height: 65px;
    border-radius: 8px;
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
</style>
```
