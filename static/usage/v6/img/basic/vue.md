```html
<template>
  <ion-img
    src="https://ionic-docs-demo-v6.vercel.app/assets/madison.jpg"
    alt="The Wisconsin State Capitol building in Madison, WI at night"
  ></ion-img>
</template>

<script lang="ts">
  import { IonImg } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonImg },
  });
</script>
```
