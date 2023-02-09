```html
<template>
  <ion-list>
    <ion-item>
      <ion-toggle>Receive Push Notifications</ion-toggle>
    </ion-item>
    <ion-item>
      <ion-toggle>Receive Emails</ion-toggle>
    </ion-item>
    <ion-item>
      <ion-toggle>Receive Text Messages</ion-toggle>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonItem, IonList, IonToggle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonList, IonToggle },
  });
</script>
```
