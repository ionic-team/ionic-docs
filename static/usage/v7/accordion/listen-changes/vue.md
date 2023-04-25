```html
<template>
  <ion-accordion-group @ionChange="accordionGroupChange($event)">
    <ion-accordion value="first">
      <ion-item slot="header" color="light">
        <ion-label>First Accordion</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">First Content</div>
    </ion-accordion>
    <ion-accordion value="second">
      <ion-item slot="header" color="light">
        <ion-label>Second Accordion</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">Second Content</div>
    </ion-accordion>
    <ion-accordion value="third">
      <ion-item slot="header" color="light">
        <ion-label>Third Accordion</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">Third Content</div>
    </ion-accordion>
  </ion-accordion-group>

  <p ref="listenerOut"></p>
</template>

<script lang="ts">
  import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, AccordionGroupCustomEvent } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: {
      IonAccordion,
      IonAccordionGroup,
      IonItem,
      IonLabel,
    },
    setup() {
      const listenerOut = ref(null);
      const values = ['first', 'second', 'third'];
      const accordionGroupChange = (ev: AccordionGroupCustomEvent) => {
        if (!listenerOut.value) {
          return;
        }

        const collapsedItems = values.filter((value) => value !== ev.detail.value);
        const selectedValue = ev.detail.value;

        listenerOut.value.innerText = `
          Expanded: ${selectedValue === undefined ? 'None' : ev.detail.value}
          Collapsed: ${collapsedItems.join(', ')}
        `;
      };
      return { listenerOut, accordionGroupChange };
    },
  });
</script>
```
