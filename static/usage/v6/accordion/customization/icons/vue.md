```html
<template>
  <ion-accordion-group>
    <ion-accordion value="first" :toggle-icon="caretDownCircle" toggle-icon-slot="start">
      <ion-item slot="header" color="light">
        <ion-label>First Accordion</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">
        First Content
      </div>
    </ion-accordion>
    <ion-accordion value="second" :toggle-icon="caretDownCircle" toggle-icon-slot="start">
      <ion-item slot="header" color="light">
        <ion-label>Second Accordion</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">
        Second Content
      </div>
    </ion-accordion>
    <ion-accordion value="third" :toggle-icon="caretDownCircle" toggle-icon-slot="start">
      <ion-item slot="header" color="light">
        <ion-label>Third Accordion</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">
        Third Content
      </div>
    </ion-accordion>
  </ion-accordion-group>
</template>

<script lang="ts">
  import {
    IonAccordion, 
    IonAccordionGroup,
    IonItem, 
    IonLabel
  } from '@ionic/vue';
  import { caretDownCircle } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonAccordion, 
      IonAccordionGroup,
      IonItem, 
      IonLabel
    },
    setup() {
      return { caretDownCircle }
    }
  });
</script>
```
