```html
<template>
  <ion-item>
    <ion-label>Default Input</ion-label>
    <ion-input placeholder="Enter text"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="fixed">Fixed Input</ion-label>
    <ion-input placeholder="Enter text"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="stacked">Stacked Input</ion-label>
    <ion-input placeholder="Enter text"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="floating">Floating Input</ion-label>
    <ion-input placeholder="Enter text"></ion-input>
  </ion-item>

  <ion-item fill="outline">
    <ion-label position="floating">Floating Input: Outline (MD only)</ion-label>
    <ion-input placeholder="Enter text"></ion-input>
  </ion-item>

  <ion-item fill="solid">
    <ion-label position="floating">Floating Input: Solid (MD only)</ion-label>
    <ion-input placeholder="Enter text"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label>Select</ion-label>
    <ion-select placeholder="Make a Selection">
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
    <ion-label>Toggle</ion-label>
    <ion-toggle slot="end"></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label>Checkbox</ion-label>
    <ion-checkbox slot="end"></ion-checkbox>
  </ion-item>

  <ion-item>
    <ion-label position="stacked">Range</ion-label>
    <ion-range></ion-range>
  </ion-item>
</template>

<script lang="ts">
  import { IonCheckbox, IonInput, IonItem, IonLabel, IonRange, IonSelect, IonSelectOption, IonToggle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCheckbox, IonInput, IonItem, IonLabel, IonRange, IonSelect, IonSelectOption, IonToggle },
  });
</script>
```
