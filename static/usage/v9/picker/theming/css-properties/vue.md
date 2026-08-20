```html
<style>
  ion-picker {
    --highlight-background: var(--ion-color-dark);
    --highlight-border-radius: 50px;

    --fade-background-rgb: var(--ion-color-light-rgb);
  }

  ion-picker-column-option {
    text-transform: uppercase;
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
  }

  ion-picker-column-option[value='red'] {
    background-image: linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%);
  }
  ion-picker-column-option[value='blue'] {
    background-image: linear-gradient(-225deg, #2cd8d5 0%, #c5c1ff 56%, #ffbac3 100%);
  }
  ion-picker-column-option[value='green'] {
    background-image: linear-gradient(-225deg, #11998e 0%, #38ef7d 48%, #40e0d0 100%);
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
</style>
<template>
  <ion-picker>
    <ion-picker-column value="red">
      <ion-picker-column-option value="" disabled="true">--</ion-picker-column-option>
      <ion-picker-column-option :value.attr="'red'">Red</ion-picker-column-option>
      <ion-picker-column-option :value.attr="'blue'">Blue</ion-picker-column-option>
      <ion-picker-column-option :value.attr="'green'">Green</ion-picker-column-option>
    </ion-picker-column>
  </ion-picker>
</template>

<script setup lang="ts">
  import { IonPicker, IonPickerColumn, IonPickerColumnOption } from '@ionic/vue';
</script>
```
