```html
<template>
  <ion-gallery layout="masonry">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </ion-gallery>
</template>

<script setup lang="ts">
  import { IonGallery } from '@ionic/vue';
</script>

<style scoped>
  ion-gallery div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 16px;
  }

  ion-gallery div:nth-child(1) {
    background: #ff6b6b;
    height: 175px;
  }

  ion-gallery div:nth-child(2) {
    background: #4ecdc4;
    height: 30px;
  }

  ion-gallery div:nth-child(3) {
    background: #ffe66d;
    color: #333;
    height: 90px;
  }

  ion-gallery div:nth-child(4) {
    background: #5f27cd;
    height: 50px;
  }

  ion-gallery div:nth-child(5) {
    background: #7f8c8d;
    height: 110px;
  }

  ion-gallery div:nth-child(6) {
    background: #ff9f43;
    height: 175px;
  }
</style>
```
