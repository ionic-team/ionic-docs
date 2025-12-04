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

<script setup lang="ts">
  import { IonTextarea } from '@ionic/vue';

  const customFormatter = (inputLength, maxLength) => {
    return `${maxLength - inputLength} characters remaining`;
  };
</script>
```
