```html
<template>
  <ion-content color="light">
    <ion-list :inset="true">
      <ion-item :button="true" :detail="false" id="select-fruits">
        <ion-label>Favorite Fruits</ion-label>
        <div slot="end" id="selected-fruits">{{ selectedFruitsText }}</div>
      </ion-item>
    </ion-list>
  </ion-content>

  <ion-modal trigger="select-fruits" ref="modal">
    <app-typeahead
      class="ion-page"
      title="Favorite Fruits"
      :items="fruits"
      :selectedItems="selectedFruits"
      @selection-change="fruitSelectionChanged($event)"
      @selection-cancel="modal.$el.dismiss()"
    ></app-typeahead>
  </ion-modal>
</template>

<script lang="ts">
  import { IonContent, IonItem, IonLabel, IonList, IonModal } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  import type { Item } from '../types';
  import AppTypeahead from './AppTypeahead.vue';

  export default defineComponent({
    components: { AppTypeahead, IonContent, IonItem, IonLabel, IonList, IonModal },
    setup() {
      const fruits: Item[] = [
        { text: 'Apple', value: 'apple' },
        { text: 'Apricot', value: 'apricot' },
        { text: 'Banana', value: 'banana' },
        { text: 'Blackberry', value: 'blackberry' },
        { text: 'Blueberry', value: 'blueberry' },
        { text: 'Cherry', value: 'cherry' },
        { text: 'Cranberry', value: 'cranberry' },
        { text: 'Grape', value: 'grape' },
        { text: 'Grapefruit', value: 'grapefruit' },
        { text: 'Guava', value: 'guava' },
        { text: 'Jackfruit', value: 'jackfruit' },
        { text: 'Lime', value: 'lime' },
        { text: 'Mango', value: 'mango' },
        { text: 'Nectarine', value: 'nectarine' },
        { text: 'Orange', value: 'orange' },
        { text: 'Papaya', value: 'papaya' },
        { text: 'Passionfruit', value: 'passionfruit' },
        { text: 'Peach', value: 'peach' },
        { text: 'Pear', value: 'pear' },
        { text: 'Plantain', value: 'plantain' },
        { text: 'Plum', value: 'plum' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Pomegranate', value: 'pomegranate' },
        { text: 'Raspberry', value: 'raspberry' },
        { text: 'Strawberry', value: 'strawberry' },
      ];
      const modal = ref();
      const selectedFruitsText = ref('0 Items');
      const selectedFruits = ref([]);

      const formatData = (data: string[]) => {
        if (data.length === 1) {
          const fruit = fruits.find((fruit) => fruit.value === data[0]);
          return fruit.text;
        }

        return `${data.length} items`;
      };

      const fruitSelectionChanged = (fruits: string[]) => {
        selectedFruits.value = fruits;
        selectedFruitsText.value = formatData(selectedFruits.value);
        modal.value.$el.dismiss();
      };

      return { modal, fruits, selectedFruitsText, selectedFruits, fruitSelectionChanged };
    },
  });
</script>
```
