```html
<template>
  <ion-textarea label="Solid textarea" label-placement="floating" fill="solid" placeholder="Enter text"></ion-textarea>

  <br />

  <ion-textarea
    label="Outline textarea"
    label-placement="floating"
    fill="outline"
    placeholder="Enter text"
  ></ion-textarea>
</template>

<script>
  import { IonTextarea } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonTextarea },
  });
</script>
```
