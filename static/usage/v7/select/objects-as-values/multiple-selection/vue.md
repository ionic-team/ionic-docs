```html
<template>
  <ion-list>
    <ion-item>
      <ion-select
        aria-label="Food"
        placeholder="Select food"
        :compareWith="compareWith"
        @ionChange="handleChange($event)"
        :multiple="true"
      >
        <ion-select-option v-for="food in foods" :value="food">{{ food.name }}</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script>
  import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonList, IonSelect, IonSelectOption },
    data() {
      return {
        foods: [
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
        ],
      };
    },
    methods: {
      compareWith(o1, o2) {
        if (!o1 || !o2) {
          return o1 === o2;
        }

        if (Array.isArray(o2)) {
          return o2.some((o) => o.id === o1.id);
        }

        return o1.id === o2.id;
      },
      handleChange(event) {
        console.log('Current value:', JSON.stringify(event.detail.value));
      },
    },
  });
</script>
```
