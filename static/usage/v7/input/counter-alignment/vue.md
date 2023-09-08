```html
<template>
  <ion-list>
    <ion-item>
      <ion-input label="Text input" placeholder="Enter text"></ion-input>
    </ion-item>

    <div class="ion-padding-start">
      <ion-input label="Counter input" :counter="true" maxlength="20"></ion-input>
    </div>
  </ion-list>
</template>

<script lang="ts" setup>
  import { IonInput, IonItem, IonList } from '@ionic/vue';
</script>
```
