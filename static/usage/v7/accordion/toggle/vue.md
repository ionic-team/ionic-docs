```html
<template>
  <ion-accordion-group ref="accordionGroup">
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

  <ion-button @click="toggleAccordion()">Toggle Second Accordion</ion-button>
</template>

<script lang="ts">
  import { IonAccordion, IonAccordionGroup, IonButton, IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: {
      IonAccordion,
      IonAccordionGroup,
      IonButton,
      IonItem,
      IonLabel,
    },
    setup() {
      const accordionGroup = ref(null);
      const toggleAccordion = () => {
        if (!accordionGroup.value) {
          return;
        }
        const nativeEl = accordionGroup.value.$el;

        if (nativeEl.value === 'second') {
          nativeEl.value = undefined;
        } else {
          nativeEl.value = 'second';
        }
      };

      return { accordionGroup, toggleAccordion };
    },
  });
</script>
```
