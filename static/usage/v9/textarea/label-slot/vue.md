```html
<template>
  <ion-list>
    <ion-item>
      <ion-textarea label-placement="floating" value="Lorem Ipsum">
        <div slot="label">Comments <ion-text color="danger">(Required)</ion-text></div>
      </ion-textarea>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonTextarea, IonItem, IonList, IonText } from '@ionic/vue';
</script>
```
