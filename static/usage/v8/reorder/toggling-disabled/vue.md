```html
<template>
  <ion-list>
    <ion-reorder-group :disabled="isDisabled" @ionReorderEnd="handleReorderEnd($event)">
      <ion-item>
        <ion-label> Item 1 </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>

      <ion-item>
        <ion-label> Item 2 </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>

      <ion-item>
        <ion-label> Item 3 </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>

      <ion-item>
        <ion-label> Item 4 </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>

      <ion-item>
        <ion-label> Item 5 </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>
    </ion-reorder-group>
  </ion-list>

  <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
  <ion-button @click="toggleReorder()"> Toggle Reorder </ion-button>
</template>

<script lang="ts">
  import {
    IonButton,
    IonItem,
    IonLabel,
    IonList,
    IonReorder,
    IonReorderGroup,
    ReorderEndCustomEvent,
  } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup },
    setup() {
      let isDisabled = ref(true);

      const handleReorderEnd = (event: ReorderEndCustomEvent) => {
        // The `from` and `to` properties contain the index of the item
        // when the drag started and ended, respectively
        console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. This method can also be called directly
        // by the reorder group.
        event.detail.complete();
      };

      const toggleReorder = () => {
        isDisabled.value = !isDisabled.value;
      };

      return { isDisabled, handleReorderEnd, toggleReorder };
    },
  });
</script>
```
