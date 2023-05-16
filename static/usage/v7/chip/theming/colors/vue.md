```html
<template>
  <ion-chip>Default</ion-chip>
  <ion-chip color="primary">Primary</ion-chip>
  <ion-chip color="secondary">Secondary</ion-chip>
  <ion-chip color="tertiary">Tertiary</ion-chip>
  <ion-chip color="success">Success</ion-chip>
  <ion-chip color="warning">Warning</ion-chip>
  <ion-chip color="danger">Danger</ion-chip>
  <ion-chip color="light">Light</ion-chip>
  <ion-chip color="medium">Medium</ion-chip>
  <ion-chip color="dark">Dark</ion-chip>
</template>

<script lang="ts">
  import { IonChip } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonChip },
  });
</script>
```
