```html
<style>
  ion-textarea.custom {
    --background: #373737;
    --color: #fff;
    --padding-end: 10px;
    --padding-start: 10px;
    --placeholder-color: #ddd;
    --placeholder-opacity: 0.8;
  }

  ion-textarea.custom .helper-text,
  ion-textarea.custom .counter {
    color: #373737;
  }
</style>

<template>
  <ion-textarea
    aria-label="Custom textarea"
    placeholder="Type something here"
    class="custom"
    helper-text="Helper text"
    :counter="true"
    :maxlength="100"
  ></ion-textarea>
</template>

<script lang="ts">
  import { IonTextarea } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonTextarea },
  });
</script>
```
