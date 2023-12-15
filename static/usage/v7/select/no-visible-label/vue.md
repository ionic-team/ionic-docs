```html
<template>
  <ion-list>
    <ion-item>
      <ion-select aria-label="Favorite Fruit" value="apple">
        <ion-select-option value="apple">Apple</ion-select-option>
        <ion-select-option value="banana">Banana</ion-select-option>
        <ion-select-option value="orange">Orange</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script lang="ts" setup>
  import { IonItem, IonList, IonSelect, IonSelectOption, IonText } from '@ionic/vue';
</script>
```
