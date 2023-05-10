```html
<style>
  ion-backdrop {
    opacity: 0.9;
    background: var(--ion-color-primary);
  }

  #box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--ion-background-color, #fff);
    width: 90%;
    height: 100px;
    border-radius: 10px;
  }
</style>

<ion-backdrop visible="true"></ion-backdrop>
<div class="ion-page">
  <ion-header>
    <ion-toolbar>
      <ion-title>Backdrop</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, cum aspernatur cupiditate nesciunt totam
      perspiciatis delectus soluta laboriosam, ullam impedit porro eaque laborum optio natus sed nostrum, provident
      expedita vero!
    </p>
  </ion-content>
</div>
<div id="box">
  <ion-checkbox color="light"></ion-checkbox>
  <ion-button class="ion-margin-start" color="light">Clickable</ion-button>
</div>
```
