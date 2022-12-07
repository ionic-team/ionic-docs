```html
<template>
  <ion-radio-group value="custom-checked">
    <ion-radio value="custom"></ion-radio>
    <ion-radio value="custom-checked"></ion-radio>
  </ion-radio-group>
</template>

<script lang="ts">
  import { IonRadio, IonRadioGroup } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonRadio, IonRadioGroup },
  });
</script>

<style scoped>
  ion-radio {
    width: 30px;
    height: 30px;
  }

  ion-radio::part(container) {
    border-radius: 8px;
    border: 2px solid #ddd;
  }

  ion-radio::part(mark) {
    background: none;
    transition: none;
    transform: none;
    border-radius: 0;
  }

  ion-radio.radio-checked::part(container) {
    background: #6815ec;
    border-color: transparent;
  }

  ion-radio.radio-checked::part(mark) {
    width: 6px;
    height: 10px;

    border-width: 0px 2px 2px 0px;
    border-style: solid;
    border-color: #fff;

    transform: rotate(45deg);
  }
</style>
```
