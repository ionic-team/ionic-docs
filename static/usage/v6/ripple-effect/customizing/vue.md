```html
<template>
  <div class="wrapper">
    <b>Click on a shape to see the ripple</b>

    <div class="ion-activatable ripple-parent custom-parent">
      Custom Parent Color
      <ion-ripple-effect></ion-ripple-effect>
    </div>

    <div class="ion-activatable ripple-parent">
      Custom Ripple Color
      <ion-ripple-effect class="custom-ripple"></ion-ripple-effect>
    </div>
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
  .wrapper {
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content: space-between;
    text-align: center;

    height: 170px;
    width: 400px;

    margin: 0 auto;
  }

  b {
    width: 100%;
  }

  .ripple-parent {
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    overflow: hidden;

    border: 1px solid #ddd;

    user-select: none;

    width: 100%;
    height: 50px;
    border-radius: 8px;
  }

  .custom-parent {
    color: #de1e7e;
  }

  .custom-ripple {
    color: #501ace;
  }
</style>
```
