```html
<template>
  <ion-grid :fixed="true">
    <ion-row>
      <ion-col>1</ion-col>
      <ion-col>2</ion-col>
      <ion-col>3</ion-col>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
  import { IonCol, IonGrid, IonRow } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCol, IonGrid, IonRow },
  });
</script>

<style scoped>
  ion-grid {
    --ion-grid-width: 50%;

    --ion-grid-width-xs: 50%;
    --ion-grid-width-sm: 288px;
    --ion-grid-width-md: 384px;
    --ion-grid-width-lg: 480px;
    --ion-grid-width-xl: 570px;
  }

  ion-col {
    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }
</style>
```
