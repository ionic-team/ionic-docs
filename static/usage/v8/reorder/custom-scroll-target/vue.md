```html
<template>
  <ion-content :scroll-y="false">
    <div class="ion-content-scroll-host">
      <ion-list>
        <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
        <ion-reorder-group :disabled="false" @ionReorderEnd="handleReorderEnd($event)">
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
    </div>
  </ion-content>
</template>

<script lang="ts">
  import { IonContent, IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ReorderEndCustomEvent } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent, IonItem, IonLabel, IonList, IonReorder, IonReorderGroup },
    setup() {
      const handleReorderEnd = (event: ReorderEndCustomEvent) => {
        // The `from` and `to` properties contain the index of the item
        // when the drag started and ended, respectively
        console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. This method can also be called directly
        // by the reorder group
        event.detail.complete();
      };

      return { handleReorderEnd };
    },
  });
</script>

<style scoped>
  .ion-content-scroll-host {
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
</style>
```
