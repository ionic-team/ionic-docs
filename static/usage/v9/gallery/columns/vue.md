```html
<template>
  <ion-gallery :columns="columns">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
  </ion-gallery>
</template>

<script setup lang="ts">
  import { IonGallery } from '@ionic/vue';

  const columns = {
    xs: 3,
    sm: 6,
    md: 8,
    lg: 9,
    xl: 10,
    xxl: 12,
  };
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
  }

  ion-gallery div:nth-child(2) {
    background: #4ecdc4;
  }

  ion-gallery div:nth-child(3) {
    background: #ffe66d;
    color: #333;
  }

  ion-gallery div:nth-child(4) {
    background: #5f27cd;
  }

  ion-gallery div:nth-child(5) {
    background: #7f8c8d;
  }

  ion-gallery div:nth-child(6) {
    background: #ff9f43;
  }

  ion-gallery div:nth-child(7) {
    background: #ff3f34;
  }

  ion-gallery div:nth-child(8) {
    background: #2ecc71;
  }

  ion-gallery div:nth-child(9) {
    background: #34495e;
  }

  ion-gallery div:nth-child(10) {
    background: #1abc9c;
  }

  ion-gallery div:nth-child(11) {
    background: #e67e22;
  }

  ion-gallery div:nth-child(12) {
    background: #9b59b6;
  }
</style>
```
