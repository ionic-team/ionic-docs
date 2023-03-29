```html
<template>
  <ion-grid>
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
    --ion-grid-padding: 20px;

    --ion-grid-padding-xs: 20px;
    --ion-grid-padding-sm: 20px;
    --ion-grid-padding-md: 20px;
    --ion-grid-padding-lg: 20px;
    --ion-grid-padding-xl: 20px;

    --ion-grid-column-padding: 30px;

    --ion-grid-column-padding-xs: 30px;
    --ion-grid-column-padding-sm: 30px;
    --ion-grid-column-padding-md: 30px;
    --ion-grid-column-padding-lg: 30px;
    --ion-grid-column-padding-xl: 30px;
  }

  ion-col {
    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }
</style>
```
