```html
<template>
  <ion-list>
    <ion-item>
      <ion-input
        label="Input with clear button"
        label-placement="stacked"
        :clear-input="true"
        placeholder="Enter text to see clear button"
        value="Default value"
      >
      </ion-input>
    </ion-item>

    <ion-item>
      <ion-input
        label="Input with clear on edit"
        label-placement="stacked"
        :clear-on-edit="true"
        placeholder="Enter text, leave the input, come back and type to clear"
      >
      </ion-input>
    </ion-item>

    <ion-item>
      <ion-input
        label="Password input"
        label-placement="stacked"
        type="password"
        placeholder="Enter text, leave the input, come back and type to clear"
      >
      </ion-input>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonList },
  });
</script>
```
