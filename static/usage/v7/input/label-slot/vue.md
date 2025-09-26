```html
<template>
  <ion-list>
    <ion-item>
      <ion-input label-placement="floating" value="hi@ionic.io">
        <div slot="label">Email <ion-text color="danger">(Required)</ion-text></div>
      </ion-input>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonInput, IonItem, IonList, IonText } from '@ionic/vue';
</script>
```
