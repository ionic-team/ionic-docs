```html
<ion-list>
  <ion-item>
    <ion-button onclick="setFocus()">Click to set focus</ion-button>
  </ion-item>
  <ion-item>
    <ion-input label="Email" label-placement="floating"></ion-input>
  </ion-item>
</ion-list>

<script>
  function setFocus() {
    const input = document.querySelector('ion-input');
    input.setFocus();
  }
</script>
```
