```html
<template>
  <ion-item-divider>
    <ion-label>
      Item Divider
    </ion-label>
  </ion-item-divider>
</template>

<script lang="ts">
  import { IonItemDivider } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItemDivider }
  });
</script>

<style scoped>
  ion-item-divider {
    --background: #19422d;
    --color: #fff;

    --padding-top: 10px;
    --padding-bottom: 10px;
    --padding-start: 20px;
    --padding-end: 20px;
  }
</style>
```
