```html
<b>No offset for xs breakpoint, offset 1st column for sm and up</b>
<ion-grid>
  <ion-row>
    <ion-col offset-sm="2">1</ion-col>
    <ion-col>2</ion-col>
    <ion-col>3</ion-col>
    <ion-col>4</ion-col>
    <ion-col>5</ion-col>
  </ion-row>
</ion-grid>

<b>No offset for xs breakpoint, offset last 3 columns for md and up</b>
<ion-grid>
  <ion-row>
    <ion-col>1</ion-col>
    <ion-col offset-md="2">2</ion-col>
    <ion-col offset-md="2">3</ion-col>
    <ion-col offset-md="2">4</ion-col>
  </ion-row>
</ion-grid>

<b>Offset all columns by 6 for xs breakpoint, offset by 4 for md, offset by 2 for lg and up</b>
<ion-grid>
  <ion-row>
    <ion-col offset="6" offset-md="4" offset-lg="2">1</ion-col>
    <ion-col offset="6" offset-md="4" offset-lg="2">2</ion-col>
  </ion-row>
</ion-grid>

<style>
  ion-col {
    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }
</style>
```
