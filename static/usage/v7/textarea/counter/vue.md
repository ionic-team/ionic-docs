```html
<template>
  <ion-textarea label="Default counter" label-placement="floating" :counter="true" maxlength="20"></ion-textarea>

  <ion-textarea
    label="Custom Counter Format"
    label-placement="floating"
    :counter="true"
    maxlength="20"
    :counter-formatter="customFormatter"
  ></ion-textarea>
</template>

<script lang="ts">
  import { IonTextarea } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonTextarea },
    methods: {
      customFormatter(inputLength, maxLength) {
        return `${maxLength - inputLength} characters remaining`;
      },
    },
  });
</script>
```
