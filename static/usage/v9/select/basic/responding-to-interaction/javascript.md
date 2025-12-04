```html
<ion-list>
  <ion-item>
    <ion-select aria-label="Fruit" placeholder="Select fruit">
      <ion-select-option value="apples">Apples</ion-select-option>
      <ion-select-option value="oranges">Oranges</ion-select-option>
      <ion-select-option value="bananas">Bananas</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>

<script>
  const select = document.querySelector('ion-select');

  select.addEventListener('ionChange', (e) => {
    console.log(`ionChange fired with value: ${e.detail.value}`);
  });

  select.addEventListener('ionCancel', () => {
    console.log('ionCancel fired');
  });

  select.addEventListener('ionDismiss', () => {
    console.log('ionDismiss fired');
  });
</script>
```
