```html
<ion-toggle></ion-toggle>
<ion-toggle checked="true"></ion-toggle>

<style>
  ion-toggle {
    height: 60px;
    width: 100px;

    --handle-width: 50%;
    --handle-height: 100%;
    --handle-spacing: 0px;
  }

  ion-toggle::part(track) {
    background: #000;
  }

  ion-toggle.toggle-checked::part(track) {
    background: #09c567;
  }

  ion-toggle::part(handle) {
    background: #f3e895;

    border-radius: 14px 4px 4px 14px;
    box-shadow: 4px 0 2px 0 red;
  }

  ion-toggle.toggle-checked::part(handle) {
    background: #7a49a5;

    border-radius: 4px 14px 14px 4px;
    box-shadow: -4px 0 2px 0 red;
  }
</style>
```
