```html
<template>
  <b>Column 1 has <code>push</code> set to <code>"4"</code> and column 2 has <code>pull</code> set to <code>"4"</code></b>
  <ion-grid>
    <ion-row>
      <ion-col push="4">1</ion-col>
      <ion-col pull="4">2</ion-col>
      <ion-col>3</ion-col>
    </ion-row>
  </ion-grid>

  <b>Column 2 has <code>push</code> set to <code>"4"</code> and column 3 & 4 have <code>pull</code> set to <code>"2"</code></b>
  <ion-grid>
    <ion-row>
      <ion-col>1</ion-col>
      <ion-col push="4">2</ion-col>
      <ion-col pull="2">3</ion-col>
      <ion-col pull="2">4</ion-col>
      <ion-col>5</ion-col>
      <ion-col>6</ion-col>
    </ion-row>
  </ion-grid>

  <b>Column 1 has <code>push</code> set to <code>"3"</code> and column 2 has <code>pull</code> set to <code>"9"</code></b>
  <ion-grid>
    <ion-row>
      <ion-col size="9" push="3">1</ion-col>
      <ion-col size="3" pull="9">2</ion-col>
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
