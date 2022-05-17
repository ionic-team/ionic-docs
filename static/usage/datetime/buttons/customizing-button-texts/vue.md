```html
<template>
  <ion-datetime
    :show-default-buttons="true"
    done-text="All set"
    cancel-text="Never mind"
  ></ion-datetime>
</template>

<script lang="ts">
  import { IonDatetime } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonDatetime }
  });
</script>
```
