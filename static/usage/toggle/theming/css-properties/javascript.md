```html
<ion-toggle></ion-toggle>
<ion-toggle checked="true"></ion-toggle>

<style>
  ion-toggle {
    height: 60px;
    width: 100px;

    --background: #000;
    --background-checked: #09c567;

    --handle-background: #f3e895;
    --handle-background-checked: #7a49a5;

    --handle-width: 50%;
    --handle-height: 100%;
    --handle-spacing: 0px;

    --handle-border-radius: 14px 4px 4px 14px;
    --handle-box-shadow: 4px 0 2px 0 red;
  }

  ion-toggle.toggle-checked {
    --handle-border-radius: 4px 14px 14px 4px;
    --handle-box-shadow: -4px 0 2px 0 red;
  }
</style>
```
