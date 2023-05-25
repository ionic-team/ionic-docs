```html
<style>
  ion-textarea.custom-textarea {
    --background: #373737;
    --color: #fff;
    --padding-end: 10px;
    --padding-start: 10px;
    --placeholder-color: #ddd;
    --placeholder-opacity: 0.8;
  }
</style>

<template>
  <ion-textarea class="custom-textarea" placeholder="Type something here"></ion-textarea>
</template>

<script lang="ts">
  import { IonTextarea } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonTextarea },
  });
</script>
```
