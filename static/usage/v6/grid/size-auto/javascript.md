```html
<b>Column 1 has <code>size</code> set to <code>"auto"</code></b>
<ion-grid>
  <ion-row>
    <ion-col size="auto">1</ion-col>
    <ion-col>2</ion-col>
    <ion-col>3</ion-col>
  </ion-row>
</ion-grid>

<b>Column 3 contains an input and has <code>size</code> set to <code>"auto"</code></b>
<ion-grid>
  <ion-row>
    <ion-col>1</ion-col>
    <ion-col>2</ion-col>
    <ion-col size="auto">
      <ion-input placeholder="3"></ion-input>
    </ion-col>
    <ion-col>4</ion-col>
    <ion-col>5</ion-col>
    <ion-col>6</ion-col>
  </ion-row>
</ion-grid>

<b>Column 2 has <code>size</code> set to <code>"auto"</code> and a defined width</b>
<ion-grid>
  <ion-row>
    <ion-col>1</ion-col>
    <ion-col size="auto">
      <div style="width: 150px">2</div>
    </ion-col>
  </ion-row>
</ion-grid>

<style>
  ion-col {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
  }
</style>
```
