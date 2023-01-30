```html
<template>
  <ion-button @click="setOpen(true)">Click Me</ion-button>
  <ion-alert
    :is-open="isOpen"
    header="Alert"
    sub-header="Important message"
    message="This is an alert!"
    :buttons="alertButtons"
    @didDismiss="setOpen(false)"
  ></ion-alert>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { IonAlert, IonButton } from '@ionic/vue';

  export default {
    components: { IonAlert, IonButton },
    setup() {
      const isOpen = ref(false);
      const alertButtons = ['OK'];

      const setOpen = (state: boolean) => {
        isOpen.value = state;
      };

      return { isOpen, alertButtons, setOpen };
    },
  };
</script>
```
