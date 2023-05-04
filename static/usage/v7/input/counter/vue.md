```html
<template>
  <ion-input label="Default counter" label-placement="floating" :counter="true" maxlength="20"></ion-input>

  <ion-input
    id="custom-input"
    label="Custom Counter Format"
    label-placement="floating"
    :counter="true"
    maxlength="20"
    :counter-formatter="customFormatter"
  ></ion-input>
</template>

<script lang="ts">
  import { IonInput } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput },
    methods: {
      customFormatter(inputLength, maxLength) {
        return `${maxLength - inputLength} characters remaining`;
      },
    },
  });
</script>
```
