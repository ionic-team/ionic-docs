```html
<template>
  <ion-spinner></ion-spinner>
  <ion-spinner color="primary"></ion-spinner>
  <ion-spinner color="secondary"></ion-spinner>
  <ion-spinner color="tertiary"></ion-spinner>
  <ion-spinner color="success"></ion-spinner>
  <ion-spinner color="warning"></ion-spinner>
  <ion-spinner color="danger"></ion-spinner>
  <ion-spinner color="light"></ion-spinner>
  <ion-spinner color="medium"></ion-spinner>
  <ion-spinner color="dark"></ion-spinner>
</template>

<script lang="ts">
  import { IonSpinner } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonSpinner },
  });
</script>
```
