```html
<ion-list>
  <ion-item>
    <ion-input autofocus placeholder="with `autofocus`"></ion-input>
  </ion-item>
  <ion-item>
    <ion-input id="set-focus-input" placeholder="using `.setFocus()`"></ion-input>
  </ion-item>
</ion-list>

<script>
  window.addEventListener('appload', () => {
    document.querySelector('#set-focus-input').setFocus();
  });
</script>
```
