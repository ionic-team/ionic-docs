```html
<template>
  <ion-datetime-button datetime="datetime"></ion-datetime-button>
  
  <ion-modal :keep-contents-mounted="true">
    <ion-datetime id="datetime"></ion-datetime>
  </ion-modal>
</template>

<script lang="ts">
  import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonDatetime, IonDatetimeButton, IonModal },
  });
</script>
```
