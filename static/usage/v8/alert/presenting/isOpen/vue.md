```html
<template>
  <ion-button @click="setOpen(true)">Click Me</ion-button>
  <ion-alert
    :is-open="isOpen"
    header="A Short Title Is Best"
    sub-header="A Sub Header Is Optional"
    message="A message should be a short, complete sentence."
    :buttons="alertButtons"
    @didDismiss="setOpen(false)"
  ></ion-alert>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { IonAlert, IonButton } from '@ionic/vue';

  const isOpen = ref(false);
  const alertButtons = ['Action'];

  const setOpen = (state: boolean) => {
    isOpen.value = state;
  };
</script>
```
