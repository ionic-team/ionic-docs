```html
<template>
  <ion-accordion-group expand="inset">
    <ion-accordion value="first">
      <ion-item slot="header" color="rose">
        <ion-label>First Accordion</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">
        First Content
      </div>
    </ion-accordion>
    <ion-accordion value="second">
      <ion-item slot="header" color="rose">
        <ion-label>Second Accordion</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">
        Second Content
      </div>
    </ion-accordion>
    <ion-accordion value="third">
      <ion-item slot="header" color="rose">
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

<style>
  :root {
    --ion-color-rose: #fecdd3;
    --ion-color-rose-rgb: 254,205,211;
    --ion-color-rose-contrast: #000000;
    --ion-color-rose-contrast-rgb: 0,0,0;
    --ion-color-rose-shade: #e0b4ba;
    --ion-color-rose-tint: #fed2d7;
  }
  
  .ion-color-rose {
    --ion-color-base: var(--ion-color-rose);
    --ion-color-base-rgb: var(--ion-color-rose-rgb);
    --ion-color-contrast: var(--ion-color-rose-contrast);
    --ion-color-contrast-rgb: var(--ion-color-rose-contrast-rgb);
    --ion-color-shade: var(--ion-color-rose-shade);
    --ion-color-tint: var(--ion-color-rose-tint);
  }
  
  div[slot="content"] {
    background: rgba(var(--ion-color-rose-rgb), 0.25)
  }
</style>
```
