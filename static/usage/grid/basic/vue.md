```html
<template>
  <ion-grid>
    <ion-row>
      <ion-col>1</ion-col>
      <ion-col>2</ion-col>
      <ion-col>3</ion-col>
    </ion-row>
  </ion-grid>

  <ion-grid>
    <ion-row>
      <ion-col>1</ion-col>
      <ion-col>2</ion-col>
      <ion-col>3</ion-col>
      <ion-col>4</ion-col>
      <ion-col>5</ion-col>
      <ion-col>6</ion-col>
    </ion-row>
  </ion-grid>

  <ion-grid>
    <ion-row>
      <ion-col>1</ion-col>
      <ion-col>2</ion-col>
      <ion-col>3</ion-col>
      <ion-col>4</ion-col>
      <ion-col>5</ion-col>
      <ion-col>6</ion-col>
      <ion-col>7</ion-col>
      <ion-col>8</ion-col>
      <ion-col>9</ion-col>
      <ion-col>10</ion-col>
      <ion-col>11</ion-col>
      <ion-col>12</ion-col>
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
