```html
<template>
  <ion-grid>
    <ion-row>
      <ion-col>1 of 3</ion-col>
      <ion-col>2 of 3</ion-col>
      <ion-col>3 of 3</ion-col>
    </ion-row>
  </ion-grid>

  <ion-grid>
    <ion-row>
      <ion-col>1 of 6</ion-col>
      <ion-col>2 of 6</ion-col>
      <ion-col>3 of 6</ion-col>
      <ion-col>4 of 6</ion-col>
      <ion-col>5 of 6</ion-col>
      <ion-col>6 of 6</ion-col>
    </ion-row>
  </ion-grid>

  <ion-grid>
    <ion-row>
      <ion-col>1 of 12</ion-col>
      <ion-col>2 of 12</ion-col>
      <ion-col>3 of 12</ion-col>
      <ion-col>4 of 12</ion-col>
      <ion-col>5 of 12</ion-col>
      <ion-col>6 of 12</ion-col>
      <ion-col>7 of 12</ion-col>
      <ion-col>8 of 12</ion-col>
      <ion-col>9 of 12</ion-col>
      <ion-col>10 of 12</ion-col>
      <ion-col>11 of 12</ion-col>
      <ion-col>12 of 12</ion-col>
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
    background-color: #f7f7f7;
    border: solid 1px #ddd;
  }
</style>
```
