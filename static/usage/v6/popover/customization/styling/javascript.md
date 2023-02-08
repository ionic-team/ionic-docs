```html
<ion-button id="trigger-button">Click Me</ion-button>
<ion-popover trigger="trigger-button">
  <ion-content class="ion-padding">Hello Styled World!</ion-content>
</ion-popover>

<style>
  ion-popover {
    --background: rgba(40, 173, 218, 0.6);
    --backdrop-opacity: 0.6;
    --box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.6);
    --color: white;
    --width: 300px;
  }

  ion-popover ion-content {
    --background: rgba(40, 173, 218, 0.6);
  }

  ion-popover::part(backdrop) {
    background-color: rgb(6, 14, 106);
  }
</style>
```
