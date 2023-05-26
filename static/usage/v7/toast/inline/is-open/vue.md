```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Inline Toast</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button expand="block" @click="setOpen(true)">Open</ion-button>
    <ion-toast
      :is-open="isOpen"
      message="This toast will close in 5 seconds"
      :duration="5000"
      @didDismiss="setOpen(false)"
    ></ion-toast>
  </ion-content>
</template>

<script lang="ts">
  import { IonButton, IonHeader, IonToolbar, IonContent, IonTitle, IonToast } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: { IonButton, IonHeader, IonToolbar, IonContent, IonTitle, IonToast },
    setup() {
      const isOpen = ref(false);
      const setOpen = (state: boolean) => {
        isOpen.value = state;
      };

      return { isOpen, setOpen };
    },
  });
</script>
```
