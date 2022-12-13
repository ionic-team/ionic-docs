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
      message="Click the 'Close' button to dismiss"
      :buttons="toastButtons"
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
      const toastButtons = [
        {
          text: 'Close',
          handler: () => setOpen(false)
        }
      ]
      
      return { isOpen, setOpen, toastButtons };
    }
  });
</script>
```
