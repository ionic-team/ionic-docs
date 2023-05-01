```html
<template>
  <ion-list-header>
    <ion-label>Custom List Header</ion-label>
  </ion-list-header>
</template>

<script lang="ts">
  import { IonLabel, IonListHeader } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonLabel, IonListHeader },
  });
</script>

<style scoped>
  ion-list-header {
    --background: #19422d;
    --color: #fff;

    --border-width: 0 0 4px 0;
    --border-color: #f24aec;
    --border-style: double;
  }
</style>
```
