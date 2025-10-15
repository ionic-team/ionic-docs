```html
<template>
  <ion-list>
    <ion-radio-group :compareWith="compareWith" @ionChange="handleChange($event)">
      <ion-item v-for="food in foods">
        <ion-radio :value="food">{{ food.name }}</ion-radio>
      </ion-item>
    </ion-radio-group>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonList, IonRadio, IonRadioGroup } from '@ionic/vue';

  const foods = [
    {
      id: 1,
      name: 'Apples',
      type: 'fruit',
    },
    {
      id: 2,
      name: 'Carrots',
      type: 'vegetable',
    },
    {
      id: 3,
      name: 'Cupcakes',
      type: 'dessert',
    },
  ];

  const compareWith = (o1, o2) => {
    return o1.id === o2.id;
  };

  const handleChange = (event) => {
    console.log('Current value:', JSON.stringify(event.detail.value));
  };
</script>
```
