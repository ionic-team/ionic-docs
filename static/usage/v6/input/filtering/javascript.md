```html
<ion-list>
  <ion-item>
    <ion-label>Alphanumeric Characters</ion-label>
    <ion-input></ion-input>
  </ion-item>
</ion-list>

<script>
  var input = document.querySelector('ion-input');
  input.addEventListener('ionInput', (ev) => {
    const value = ev.target.value;
    // Removes non alphanumeric characters
    input.value = value.replace(/[^a-zA-Z0-9]+/g, '');
  });
</script>
```
