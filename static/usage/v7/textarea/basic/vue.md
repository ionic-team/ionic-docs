```html
<template>
  <ion-list>
    <ion-item>
      <ion-textarea label="Regular textarea" placeholder="Type something here"></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-textarea :readonly="true" label="Readonly textarea" placeholder="Can't edit this"></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-textarea :disabled="true" label="Disabled textarea" placeholder="Can't type here"></ion-textarea>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonList, IonTextarea } from '@ionic/vue';
</script>
```
