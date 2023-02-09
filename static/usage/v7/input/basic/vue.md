```html
<template>
  <ion-list>
    <ion-item>
      <ion-input label="Default input"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Input with placeholder" placeholder="Enter company name"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Input with value" value="121 S Pinckney St #300"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Readonly input" value="Madison" :readonly="true"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="Disabled input" value="53703" :disabled="true"></ion-input>
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
