```html
<ion-select placeholder="Select fruit">
  <ion-select-option>Apples</ion-select-option>
  <ion-select-option>Oranges</ion-select-option>
  <ion-select-option>Bananas</ion-select-option>
</ion-select>
<div id="log" class="ion-padding">
  <p>Events will log above</p>
</div>

<script>
  const select = document.querySelector('ion-select');
  const log = document.querySelector('#log');

  select.addEventListener('ionChange', e => {
    log.insertAdjacentHTML('afterbegin', `<p>ionChange fired with value: ${e.detail.value}</p>`);
  });

  select.addEventListener('ionCancel', () => {
    log.insertAdjacentHTML('afterbegin', '<p>ionCancel fired</p>');
  });

  select.addEventListener('ionDismiss', () => {
    log.insertAdjacentHTML('afterbegin', '<p>ionDismiss fired</p>');
  });
</script>
```
