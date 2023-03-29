```html
<template>
  <ion-toggle color="primary" :checked="true"></ion-toggle>
  <ion-toggle color="secondary" :checked="true"></ion-toggle>
  <ion-toggle color="tertiary" :checked="true"></ion-toggle>
  <ion-toggle color="success" :checked="true"></ion-toggle>
  <ion-toggle color="warning" :checked="true"></ion-toggle>
  <ion-toggle color="danger" :checked="true"></ion-toggle>
  <ion-toggle color="light" :checked="true"></ion-toggle>
  <ion-toggle color="medium" :checked="true"></ion-toggle>
  <ion-toggle color="dark" :checked="true"></ion-toggle>
</template>

<script lang="ts">
  import { IonToggle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonToggle },
  });
</script>
```
