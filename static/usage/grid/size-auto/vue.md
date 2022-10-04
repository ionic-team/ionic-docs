```html
<template>
  <ion-grid>
    <ion-row>
      <ion-col size="auto">1 of 3 (size="auto")</ion-col>
      <ion-col>2 of 3</ion-col>
      <ion-col>3 of 3</ion-col>
    </ion-row>
  </ion-grid>

  <ion-grid>
    <ion-row>
      <ion-col>1 of 6</ion-col>
      <ion-col>2 of 6</ion-col>
      <ion-col size="auto">
        3 of 6 (size="auto")
        <ion-input placeholder="default input"></ion-input>
      </ion-col>
      <ion-col>4 of 6</ion-col>
      <ion-col>5 of 6</ion-col>
      <ion-col>6 of 6</ion-col>
    </ion-row>
  </ion-grid>

  <ion-grid>
    <ion-row>
      <ion-col>1 of 2</ion-col>
      <ion-col size="auto">2 of 2 (size="auto")</ion-col>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
  import { IonCol, IonGrid, IonInput, IonRow } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCol, IonGrid, IonInput, IonRow },
  });
</script>
```
