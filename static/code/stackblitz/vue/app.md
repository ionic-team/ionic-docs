```vue
<template>
  <ion-app>
    <Example />
  </ion-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonApp } from "@ionic/vue";

import Example from "./components/Example.vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    Example,
  },
});
</script>
```
