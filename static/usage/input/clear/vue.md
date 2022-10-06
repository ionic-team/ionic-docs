```html
<template>
  <ion-list>
    <ion-item>
      <ion-label position="stacked">Input with clear button</ion-label>
      <ion-input :clear-input="true" placeholder="Enter text to see clear button" value="Default value"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Input with clear on edit</ion-label>
      <ion-input :clear-on-edit="true" placeholder="Enter text, leave the input, come back and type to clear"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Password input</ion-label>
      <ion-input type="password" placeholder="Enter text, leave the input, come back and type to clear"></ion-input>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonLabel, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonLabel, IonList },
  });
</script>
```
