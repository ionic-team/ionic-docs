```html
<template>
  <ion-list>
    <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
    <ion-reorder-group :disabled="false" @ionReorderEnd="handleReorder($event)">
      <ion-item v-for="item in items" :key="item">
        <ion-label> Item {{ item }} </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>
    </ion-reorder-group>
  </ion-list>
</template>

<script lang="ts">
  import { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup },
    setup() {
      const items = ref([1, 2, 3, 4, 5]);

      const handleReorder = (event: CustomEvent) => {
        // Before complete is called with the items they will remain in the
        // order before the drag
        console.log('Before complete', items.value);

        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. Update the items variable to the
        // new order of items
        items.value = event.detail.complete(items.value);

        // After complete is called the items will be in the new order
        console.log('After complete', items.value);
      };
      return { handleReorder, items };
    },
  });
</script>
```
