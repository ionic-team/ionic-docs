```html
<template>
  <ion-progress-bar :buffer="buffer" :value="progress"></ion-progress-bar>
</template>

<script lang="ts">
  import { IonProgressBar } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: { IonProgressBar },
    setup() {
      let buffer = ref(0.06);
      let progress = ref(0);

      return {
        buffer,
        progress
      };
    },
    mounted() {
      setInterval(() => {
        this.buffer += 0.06;
        this.progress += 0.06;

        // Reset the progress bar when it reaches 100%
        // to continuously show the demo
        if (this.progress > 1) {
          setTimeout(() => {
            this.buffer = 0.06;
            this.progress = 0;
          }, 1000);
        }
      }, 1000);
    }
  });
</script>
```
