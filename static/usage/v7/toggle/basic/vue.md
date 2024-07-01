```html
<template>
  <ion-toggle>Default Toggle</ion-toggle><br /><br />
  <ion-toggle :checked="true">Checked Toggle</ion-toggle><br /><br />
  <ion-toggle :disabled="true">Disabled Toggle</ion-toggle><br /><br />
  <ion-toggle :checked="true" :disabled="true">Disabled Checked Toggle</ion-toggle>
</template>

<script lang="ts" setup>
  import { IonToggle } from '@ionic/vue';
</script>
```
