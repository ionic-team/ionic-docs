```html
<template>
  <ion-content color="light">
    <ion-list :inset="true">
      <ion-item :button="true" :detail="false" id="select-fruit">
        <ion-label>Favorite Fruit</ion-label>
        <ion-note slot="end" id="selected-fruit">{{ selectedFruit }}</ion-note>
      </ion-item>
    </ion-list>
  </ion-content>
  
  <ion-modal
    ref="modal" 
    trigger="select-fruit"
    @willDismiss="modalWillDismiss($event)"
    @didDismiss="modalDidDismiss()"
  >
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="dismissModal()">Cancel</ion-button>
        </ion-buttons>
        <ion-title>Favorite Fruit</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar @ionInput="filterList($event.target.value)"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content color="light" class="ion-padding">
      <ion-list id="modal-list" :inset="true">
        <ion-item
          v-for="fruit of filteredFruits" 
          :button="true" 
          :detail="false" 
          @click="selectFruit(fruit)"
        >
          <ion-label>{{ fruit.text }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-modal>
</template>

<script lang="ts">
  import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonModal, IonNote, IonTitle, IonSearchbar, IonToolbar } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  
  interface Fruit {
    text: string;
    value: string;
  }

  export default defineComponent({
    components: { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonModal, IonNote, IonTitle, IonSearchbar, IonToolbar },
    setup() {
      const fruits: Fruit[] = [
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
        { text: 'Strawberry', value: 'strawberry' }
      ];
      
      const filteredFruits = ref([...fruits]);
      const selectedFruit = ref('None');
      
      // Component references
      const modal = ref();
      
      /**
       * Update the rendered view with
       * the provided search query. If no
       * query is provided, all data
       * will be rendered.
       */
      const filterList = (searchQuery: string | undefined) => {
        /**
         * If no search query is defined,
         * return all options.
         */
        if (searchQuery === undefined) {
          filteredFruits.value = [...fruits];
        } else {
          /**
           * Otherwise, normalize the search
           * query and check to see which items
           * contain the search query as a substring.
           */
          const normalizedQuery = searchQuery.toLowerCase(); 
          filteredFruits.value = fruits.filter(fruit => {
            return fruit.value.includes(normalizedQuery);
          });
        }
      }
      
      /**
       * Commit an item and dismiss the modal.
       */
      const selectFruit = (fruit: Fruit) => {
        modal.value.$el.dismiss(fruit);
      }
  
      /**
       * When the modal is about to dismiss,
       * update the parent view with the selected item.
       */
      const modalWillDismiss = (ev: CustomEvent) => {
        const { data } = ev.detail;

        if (data !== undefined) {
          selectedFruit.value = data.text;
        }
      }
      
      /**
       * Reset the state of the modal
       * once it is fully dismissed.
       */ 
      const modalDidDismiss = () => {
        filteredFruits.value = [...fruits];
      }

      const dismissModal = () => {
        modal.value.$el.dismiss();
      }
      
      return { dismissModal, filteredFruits, filterList, modal, modalDidDismiss, modalWillDismiss, selectedFruit, selectFruit }
    }
  });
</script>
```
