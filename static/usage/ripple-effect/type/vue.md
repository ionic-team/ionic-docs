```html
<template>
  <b>Click on a shape to see the ripple</b>

  <div class="ion-activatable ripple-parent rounded-rectangle">
    Bounded
    <ion-ripple-effect></ion-ripple-effect>
  </div>

  <div class="ion-activatable ripple-parent circle">
    Unbounded
    <ion-ripple-effect type="unbounded"></ion-ripple-effect>
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
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    overflow: hidden;

    border: 1px solid #ddd;

    user-select: none;
  }

  .rounded-rectangle {
    width: 250px;
    height: 75px;
    border-radius: 8px;
  }

  .circle {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
</style>
```
