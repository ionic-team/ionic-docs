```html
<template>
  <b>Columns aligned at the start</b>
  <ion-grid>
    <ion-row class="ion-justify-content-start">
      <ion-col size="3">
        1
      </ion-col>
      <ion-col size="3">
        2
      </ion-col>
    </ion-row>
  </ion-grid>

  <b>Columns aligned at the center</b>
  <ion-grid>
    <ion-row class="ion-justify-content-center">
      <ion-col size="3">
        1
      </ion-col>
      <ion-col size="3">
        2
      </ion-col>
    </ion-row>
  </ion-grid>

  <b>Columns aligned at the end</b>
  <ion-grid>
    <ion-row class="ion-justify-content-end">
      <ion-col size="3">
        1
      </ion-col>
      <ion-col size="3">
        2
      </ion-col>
    </ion-row>
  </ion-grid>

  <b>Columns aligned with space around</b>
  <ion-grid>
    <ion-row class="ion-justify-content-around">
      <ion-col size="3">
        1
      </ion-col>
      <ion-col size="3">
        2
      </ion-col>
    </ion-row>
  </ion-grid>

  <b>Columns aligned with space between</b>
  <ion-grid>
    <ion-row class="ion-justify-content-between">
      <ion-col size="3">
        1
      </ion-col>
      <ion-col size="3">
        2
      </ion-col>
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
