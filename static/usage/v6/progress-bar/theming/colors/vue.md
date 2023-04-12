```html
<template>
  <ion-progress-bar type="indeterminate" color="primary"></ion-progress-bar>
  <ion-progress-bar type="indeterminate" color="secondary"></ion-progress-bar>
  <ion-progress-bar type="indeterminate" color="tertiary"></ion-progress-bar>
  <ion-progress-bar type="indeterminate" color="success"></ion-progress-bar>
  <ion-progress-bar type="indeterminate" color="warning"></ion-progress-bar>
  <ion-progress-bar type="indeterminate" color="danger"></ion-progress-bar>
  <ion-progress-bar type="indeterminate" color="light"></ion-progress-bar>
  <ion-progress-bar type="indeterminate" color="medium"></ion-progress-bar>
  <ion-progress-bar type="indeterminate" color="dark"></ion-progress-bar>
</template>

<script lang="ts">
  import { IonProgressBar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonProgressBar },
  });
</script>
```
