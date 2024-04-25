```html
<template>
  <ion-item>
    <ion-input label="Default Input" placeholder="Enter text"></ion-input>
  </ion-item>

  <ion-item>
    <ion-input label="Fixed Input" label-placement="fixed" placeholder="Enter text"></ion-input>
  </ion-item>

  <ion-item>
    <ion-input label="Stacked Input" label-placement="stacked" placeholder="Enter text"></ion-input>
  </ion-item>

  <ion-item>
    <ion-input label="Floating Input" label-placement="floating" placeholder="Enter text"></ion-input>
  </ion-item>

  <ion-item>
    <ion-select label="Select" placeholder="Make a Selection">
      <ion-select-option value="">No Game Console</ion-select-option>
      <ion-select-option value="nes">NES</ion-select-option>
      <ion-select-option value="n64">Nintendo64</ion-select-option>
      <ion-select-option value="ps">PlayStation</ion-select-option>
      <ion-select-option value="genesis">Sega Genesis</ion-select-option>
      <ion-select-option value="saturn">Sega Saturn</ion-select-option>
      <ion-select-option value="snes">SNES</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-toggle> Toggle </ion-toggle>
  </ion-item>

  <ion-item>
    <ion-checkbox> Checkbox </ion-checkbox>
  </ion-item>

  <ion-item>
    <ion-range label-placement="start">
      <div slot="label">Range</div>
    </ion-range>
  </ion-item>
</template>

<script lang="ts">
  import {
    IonCheckbox,
    IonInput,
    IonItem,
    IonLabel,
    IonRange,
    IonSelect,
    IonSelectOption,
    IonToggle,
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCheckbox, IonInput, IonItem, IonLabel, IonRange, IonSelect, IonSelectOption, IonToggle },
  });
</script>
```
