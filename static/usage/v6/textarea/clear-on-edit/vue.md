```html
<template>
  <ion-textarea
    placeholder="Enter text, leave the textarea, come back, and type to clear"
    :clear-on-edit="true"
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
