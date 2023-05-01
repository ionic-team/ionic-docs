```html
<ion-list>
  <ion-item>
    <ion-select placeholder="Select fruit">
      <ion-select-option value="apples">Apples</ion-select-option>
      <ion-select-option value="oranges">Oranges</ion-select-option>
      <ion-select-option value="bananas">Bananas</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
<div id="log" class="ion-padding"></div>

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
