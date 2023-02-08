```html
<template>
  <ion-item counter="true">
    <ion-label position="floating">Default Counter</ion-label>
    <ion-input maxlength="20"></ion-input>
  </ion-item>

  <ion-item id="custom-item" counter="true" :counterFormatter="customFormatter">
    <ion-label position="floating">Custom Counter Format</ion-label>
    <ion-input maxlength="20"></ion-input>
  </ion-item>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonLabel },
    methods: {
      customFormatter(inputLength, maxLength) {
        return `${maxLength - inputLength} characters remaining`;
      }
    }
  });
</script>
```
