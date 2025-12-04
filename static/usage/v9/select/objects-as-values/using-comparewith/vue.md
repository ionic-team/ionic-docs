```html
<template>
  <ion-list>
    <ion-item>
      <ion-select
        aria-label="Food"
        placeholder="Select fruit"
        :compareWith="compareWith"
        @ionChange="handleChange($event)"
      >
        <ion-select-option v-for="food in foods" :value="food">{{ food.name }}</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonSelect, IonSelectOption } from '@ionic/vue';

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
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  const handleChange = (event) => {
    console.log('Current value:', JSON.stringify(event.detail.value));
  };
</script>
```
