```html
<template>
  <b>Column 2 has <code>size</code> set to <code>"8"</code></b>
  <ion-grid>
    <ion-row>
      <ion-col>1</ion-col>
      <ion-col size="8">2</ion-col>
      <ion-col>3</ion-col>
    </ion-row>
  </ion-grid>

  <b>Columns 3 & 4 have <code>size</code> set to <code>"3"</code></b>
  <ion-grid>
    <ion-row>
      <ion-col>1</ion-col>
      <ion-col>2</ion-col>
      <ion-col size="3">3</ion-col>
      <ion-col size="3">4</ion-col>
      <ion-col>5</ion-col>
      <ion-col>6</ion-col>
    </ion-row>
  </ion-grid>

  <b>Columns 1 & 2 have <code>size</code> set to <code>"4"</code></b>
  <ion-grid>
    <ion-row>
      <ion-col size="4">1</ion-col>
      <ion-col size="4">2</ion-col>
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
  ion-col {
    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }
</style>
```
