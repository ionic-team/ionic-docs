```html
<ion-grid>
  <ion-row>
    <ion-col push="4">1 of 3 (push="4")</ion-col>
    <ion-col pull="4">2 of 3 (pull="4")</ion-col>
    <ion-col>3 of 3</ion-col>
  </ion-row>
</ion-grid>

<ion-grid>
  <ion-row>
    <ion-col>1 of 6</ion-col>
    <ion-col push="4">2 of 6 (push="4")</ion-col>
    <ion-col pull="2">3 of 6 (pull="2")</ion-col>
    <ion-col pull="2">4 of 6 (pull="2")</ion-col>
    <ion-col>5 of 6</ion-col>
    <ion-col>6 of 6</ion-col>
  </ion-row>
</ion-grid>

<ion-grid>
  <ion-row>
    <ion-col size="9" push="3">1 of 2</ion-col>
    <ion-col size="3" pull="9">2 of 2</ion-col>
  </ion-row>
</ion-grid>

<style>
  ion-col {
    background-color: #f7f7f7;
    border: solid 1px #ddd;
  }
</style>
```
