```html
<template>
  <ion-input
    aria-label="Custom input"
    placeholder="Custom input"
    class="custom"
    helper-text="Helper text"
    :counter="true"
    :maxlength="20"
  ></ion-input>
</template>

<script lang="ts">
  import { IonInput } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput },
  });
</script>

<style>
  ion-input.custom {
    --background: #373737;
    --color: #fff;
    --placeholder-color: #ddd;
    --placeholder-opacity: 0.8;

    --padding-bottom: 10px;
    --padding-end: 10px;
    --padding-start: 10px;
    --padding-top: 10px;
  }

  ion-input.custom.ios .input-bottom .helper-text,
  ion-input.custom.ios .input-bottom .counter,
  ion-input.custom.md .input-bottom .helper-text,
  ion-input.custom.md .input-bottom .counter {
    color: var(--ion-color-primary);
  }
</style>
```
