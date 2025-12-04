```html
<template>
  <ion-list>
    <ion-item>
      <ion-select aria-label="Fruit" interface="modal" placeholder="Select fruit">
        <ion-select-option value="apples">Apples</ion-select-option>
        <ion-select-option value="oranges">Oranges</ion-select-option>
        <ion-select-option value="bananas">Bananas</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/vue';
</script>
```
