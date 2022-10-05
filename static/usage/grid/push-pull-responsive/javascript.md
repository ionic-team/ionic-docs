```html
<b>No change for xs breakpoint, push 1st column & pull 2nd column for sm and up</b>
<ion-grid>
  <ion-row>
    <ion-col push-sm="6">1 of 2</ion-col>
    <ion-col pull-sm="6">2 of 2</ion-col>
  </ion-row>
</ion-grid>

<b>No change for xs breakpoint, push middle columns & pull last column for md and up</b>
<ion-grid>
  <ion-row>
    <ion-col>1 of 4</ion-col>
    <ion-col push-md="3">2 of 4</ion-col>
    <ion-col push-md="3">3 of 4</ion-col>
    <ion-col pull-md="6">4 of 4</ion-col>
  </ion-row>
</ion-grid>

<b>Switch first and last 3 columns for xs breakpoints, reverse columns for lg and up</b>
<ion-grid>
  <ion-row>
    <ion-col push="6" push-lg="10">1 of 6</ion-col>
    <ion-col push="6" push-lg="6">2 of 6</ion-col>
    <ion-col push="6" push-lg="2">3 of 6</ion-col>
    <ion-col pull="6" pull-lg="2">4 of 6</ion-col>
    <ion-col pull="6" pull-lg="6">5 of 6</ion-col>
    <ion-col pull="6" pull-lg="10">6 of 6</ion-col>
  </ion-row>
</ion-grid>

<style>
  ion-col {
    background-color: #f7f7f7;
    border: solid 1px #ddd;
  }
</style>
```
