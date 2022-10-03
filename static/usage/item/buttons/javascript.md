```html
<ion-item>
  <ion-button slot="start">
    Start
  </ion-button>
  <ion-label>Default Buttons</ion-label>
  <ion-button slot="end">
    End
  </ion-button>
</ion-item>

<ion-item>
  <ion-button slot="start">
    Start
    <ion-icon name="home" slot="end"></ion-icon>
  </ion-button>
  <ion-label>Buttons with Icons</ion-label>
  <ion-button slot="end">
    <ion-icon name="star" slot="end"></ion-icon>
    End
  </ion-button>
</ion-item>

<ion-item>
  <ion-button slot="start">
    <ion-icon slot="icon-only" name="navigate"></ion-icon>
  </ion-button>
  <ion-label>Icon only Buttons</ion-label>
  <ion-button slot="end">
    <ion-icon slot="icon-only" name="star"></ion-icon>
  </ion-button>
</ion-item>

<ion-item>
  <ion-label>Button Sizes</ion-label>
  <ion-button slot="end" size="small">
    Small
  </ion-button>
  <ion-button slot="end" size="default">
    Default
  </ion-button>
  <ion-button slot="end" size="large">
    Large
  </ion-button>
</ion-item>
```
