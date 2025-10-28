```html
<template>
  <ion-select aria-label="Fruit" placeholder="Select fruit">
    <ion-select-option value="apples">Apples</ion-select-option>
    <ion-select-option value="oranges">Oranges</ion-select-option>
    <ion-select-option value="bananas">Bananas</ion-select-option>
  </ion-select>
</template>

<script setup lang="ts">
  import { IonSelect, IonSelectOption } from '@ionic/vue';
</script>

<style>
  ion-select {
    --placeholder-color: #971e49;
    --placeholder-opacity: 1;
    width: 100%;
    justify-content: center;
  }

  ion-select::part(placeholder),
  ion-select::part(text) {
    flex: 0 0 auto;
  }

  ion-select::part(placeholder)::first-letter {
    font-size: 24px;
    font-weight: 500;
  }

  ion-select::part(text) {
    color: #545ca7;
  }

  ion-select::part(icon) {
    color: #971e49;
    opacity: 1;
  }
</style>
```
