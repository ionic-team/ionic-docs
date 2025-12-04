```html
<ion-segment>
  <ion-segment-button value="first" content-id="first">
    <ion-label>First</ion-label>
  </ion-segment-button>
  <ion-segment-button value="second" content-id="second">
    <ion-label>Second</ion-label>
  </ion-segment-button>
  <ion-segment-button value="third" content-id="third">
    <ion-label>Third</ion-label>
  </ion-segment-button>
</ion-segment>
<ion-segment-view>
  <ion-segment-content id="first">First</ion-segment-content>
  <ion-segment-content id="second">Second</ion-segment-content>
  <ion-segment-content id="third">Third</ion-segment-content>
</ion-segment-view>

<style>
  ion-segment-view {
    height: 150px;
  }

  ion-segment-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ion-segment-content:nth-of-type(1) {
    background: lightpink;
  }
  ion-segment-content:nth-of-type(2) {
    background: lightblue;
  }
  ion-segment-content:nth-of-type(3) {
    background: lightgreen;
  }
</style>
```
