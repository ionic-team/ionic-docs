```html
<template>
  <ion-button id="open-toast">Open Toast</ion-button>
  <ion-toast
    trigger="open-toast"
    :duration="3000"
    message="Hello Styled World!"
    class="custom-toast"
    :buttons="toastButtons"
  ></ion-toast>
</template>

<script lang="ts">
  import { IonButton, IonToast } from '@ionic/vue';

  export default {
    components: { IonButton, IonToast },
    setup() {
      const toastButtons = [
        {
          text: 'Dismiss',
          role: 'cancel',
        },
      ];

      return { toastButtons };
    },
  };
</script>

<style>
  ion-toast.custom-toast {
    --background: #f4f4fa;
    --box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.2);
    --color: #4b4a50;
  }

  ion-toast.custom-toast::part(message) {
    font-style: italic;
  }

  ion-toast.custom-toast::part(button) {
    border-left: 1px solid #d2d2d2;
    color: #030207;
    font-size: 15px;
  }
</style>
```
