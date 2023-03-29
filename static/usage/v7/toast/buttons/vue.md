```html
<template>
  <ion-button id="open-toast">Open Toast</ion-button>
  <ion-toast
    trigger="open-toast"
    message="Hello World!" 
    :duration="3000" 
    :buttons="toastButtons"
    @didDismiss="setRoleMessage($event)"
  ></ion-toast>
  <p>{{ handlerMessage }}</p>
  <p>{{ roleMessage }}</p>
</template>

<script lang="ts">
  import { IonButton, IonToast } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: { IonButton, IonToast },
    setup() {
      const handlerMessage = ref('');
      const roleMessage = ref('');
      const toastButtons = [
        {
          text: 'More Info',
          role: 'info',
          handler: () => { handlerMessage.value = 'More Info clicked'; }
        },
        {
          text: 'Dismiss',
          role: 'cancel',
          handler: () => { handlerMessage.value = 'Dismiss clicked'; }
        }
      ]
      const setRoleMessage = (ev: CustomEvent) => {
        const { role } = ev.detail
        console.log('hi there')
        roleMessage.value = `Dismissed with role: ${role}`;
      }
      
      return {
        handlerMessage,
        roleMessage,
        toastButtons,
        setRoleMessage
      }
    }
  });
</script>
```
