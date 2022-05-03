```html
<template>
  <ion-select
    placeholder="Select fruit"
    :compareWith="compareWith"
    @ionChange="currentFood = JSON.stringify($event.detail.value)"
  >
    <ion-select-option v-for="food in foods" :value="food">{{ food.name }}</ion-select-option>
  </ion-select>
  <ion-label class="ion-padding">Current value: {{ currentFood }}</ion-label>
</template>

<script>
  import { IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonLabel, IonSelect, IonSelectOption },
    data() {
      return {
        currentFood: "",
        foods: [
          {
            id: 1,
            name: "Apples",
            type: "fruit"
          },
          {
            id: 2,
            name: "Carrots",
            type: "vegetable"
          },
          {
            id: 3,
            name: "Cupcakes",
            type: "dessert"
          }
        ]
      }
    },
    methods: {
      compareWith(o1, o2) {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
      }
    }
  });
</script>
```
