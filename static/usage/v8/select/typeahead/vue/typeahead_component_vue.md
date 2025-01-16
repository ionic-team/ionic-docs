```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button @click="cancelChanges()">Cancel</ion-button>
      </ion-buttons>
      <ion-title>{{ $props.title }}</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="confirmChanges()">Done</ion-button>
      </ion-buttons>
    </ion-toolbar>
    <ion-toolbar>
      <ion-searchbar @ionInput="searchbarInput($event)"></ion-searchbar>
    </ion-toolbar>
  </ion-header>

  <ion-content color="light" class="ion-padding">
    <ion-list id="modal-list" :inset="true">
      <ion-item v-for="item in filteredItems" :key="item.value">
        <ion-checkbox :value="item.value" :checked="isChecked(item.value)" @ionChange="checkboxChange($event)"
          >{{ item.text }}</ion-checkbox
        >
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
  import {
    IonButton,
    IonButtons,
    IonCheckbox,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonTitle,
    IonSearchbar,
    IonToolbar,
  } from '@ionic/vue';
  import type { CheckboxCustomEvent, SearchbarCustomEvent } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    props: {
      items: Array,
      selectedItems: Array,
      title: {
        type: String,
        default: 'Select Items',
      },
    },
    emits: ['selection-cancel', 'selection-change'],
    components: {
      IonButton,
      IonButtons,
      IonCheckbox,
      IonContent,
      IonHeader,
      IonItem,
      IonList,
      IonTitle,
      IonSearchbar,
      IonToolbar,
    },
    setup(props, { emit }) {
      const filteredItems = ref([...props.items]);
      const workingSelectedValues = ref([...props.selectedItems]);

      const isChecked = (value: string) => {
        return workingSelectedValues.value.find((item) => item === value) !== undefined;
      };

      const cancelChanges = () => {
        emit('selection-cancel');
      };

      const confirmChanges = () => {
        emit('selection-change', workingSelectedValues.value);
      };

      const searchbarInput = (event: SearchbarCustomEvent) => {
        filterList(event.target.value);
      };

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
          filteredItems.value = [...props.items];
        } else {
          /**
           * Otherwise, normalize the search
           * query and check to see which items
           * contain the search query as a substring.
           */
          const normalizedQuery = searchQuery.toLowerCase();
          filteredItems.value = props.items.filter((item) => {
            return item.text.toLowerCase().includes(normalizedQuery);
          });
        }
      };

      const checkboxChange = (event: CheckboxCustomEvent) => {
        const { checked, value } = event.detail;

        if (checked) {
          workingSelectedValues.value = [...workingSelectedValues.value, value];
        } else {
          workingSelectedValues.value = workingSelectedValues.value.filter((item) => item !== value);
        }
      };

      return {
        filteredItems,
        workingSelectedValues,
        isChecked,
        cancelChanges,
        confirmChanges,
        searchbarInput,
        checkboxChange,
      };
    },
  });
</script>
```
