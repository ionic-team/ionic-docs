```html
<template>
  <ion-button id="buttonToFocus" fill="outline">Button</ion-button>

  <ion-radio-group value="a">
    <ion-radio id="radioToFocus" value="a">Radio</ion-radio>
  </ion-radio-group>

  <br />

  <ion-button @click="focusElement('#buttonToFocus')">Focus Button</ion-button>
  <ion-button @click="focusElement('#radioToFocus')">Focus Radio</ion-button>
</template>

<script lang="ts">
  import { IonButton, IonRadio, IonRadioGroup } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton, IonRadio, IonRadioGroup },
    methods: {
      focusElement(id) {
        const el = document.querySelector(id);

        const app = el.closest('ion-app');
        if (app) {
          app.setFocus([el]);
        }
      },
    },
  });
</script>
```
