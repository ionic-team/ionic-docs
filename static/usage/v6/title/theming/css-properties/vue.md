```html
<style>
  ion-title.title-large {
    color: #c897d8;
    font-size: 30px;
  }

  ion-title {
    --color: #000;
  }

  ion-toolbar {
    --background: #c897d8;
  }
</style>
<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-title>Title</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content :fullscreen="true">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Title</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-list>
      <ion-item>Item 1</ion-item>
      <ion-item>Item 2</ion-item>
      <ion-item>Item 3</ion-item>
      <ion-item>Item 4</ion-item>
      <ion-item>Item 5</ion-item>
      <ion-item>Item 6</ion-item>
      <ion-item>Item 7</ion-item>
      <ion-item>Item 8</ion-item>
      <ion-item>Item 9</ion-item>
      <ion-item>Item 10</ion-item>
      <ion-item>Item 11</ion-item>
      <ion-item>Item 12</ion-item>
      <ion-item>Item 13</ion-item>
      <ion-item>Item 14</ion-item>
      <ion-item>Item 15</ion-item>
      <ion-item>Item 16</ion-item>
      <ion-item>Item 17</ion-item>
      <ion-item>Item 18</ion-item>
      <ion-item>Item 19</ion-item>
      <ion-item>Item 20</ion-item>
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
  import { IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem },
  });
</script>
```
