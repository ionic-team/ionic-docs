```html
<template>
  <ion-list>
    <ion-item>
      <ion-input label="Text input" placeholder="Enter text"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Number input" type="number" placeholder="000"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Password input" type="password" value="password"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Email input" type="email" placeholder="email@domain.com"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Telephone input" type="tel" placeholder="888-888-8888"></ion-input>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonList },
  });
</script>
```
