```html
<ion-list>
  <ion-item>
    <ion-input autofocus="true" label="Autofocus" label-placement="floating"></ion-input>
  </ion-item>
  <ion-item>
    <ion-input id="set-focus-input" label="setFocus" label-placement="floating"></ion-input>
  </ion-item>
</ion-list>

<script>
  window.addEventListener('appload', () => {
    const input = document.querySelector('#set-focus-input');
    input.setFocus();
  });
</script>
```
