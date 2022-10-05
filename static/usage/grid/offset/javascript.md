```html
<ion-grid>
  <ion-row>
    <ion-col>1 of 3</ion-col>
    <ion-col offset="3">2 of 3 (offset="3")</ion-col>
    <ion-col>3 of 3</ion-col>
  </ion-row>
</ion-grid>

<ion-grid>
  <ion-row>
    <ion-col>1 of 5</ion-col>
    <ion-col>2 of 5</ion-col>
    <ion-col>3 of 5</ion-col>
    <ion-col>4 of 5</ion-col>
    <ion-col offset="2">5 of 5 (offset="2")</ion-col>
  </ion-row>
</ion-grid>

<ion-grid>
  <ion-row>
    <ion-col size="2" offset="4">1 of 2 (offset="4")</ion-col>
    <ion-col size="2">2 of 2</ion-col>
  </ion-row>
</ion-grid>

<style>
  ion-col {
    background-color: #f7f7f7;
    border: solid 1px #ddd;
  }
</style>
```
