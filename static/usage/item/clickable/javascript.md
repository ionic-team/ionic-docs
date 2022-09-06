```html
<ion-item href="#" onclick="testClick(event)">
  <ion-label>Anchor Item</ion-label>
</ion-item>

<ion-item href="#" disabled="true" onclick="testClick(event)">
  <ion-label>Disabled Anchor Item</ion-label>
</ion-item>

<ion-item button onclick="testClick(event)">
  <ion-label>Button Item</ion-label>
</ion-item>

<ion-item button disabled="true" onclick="testClick(event)">
  <ion-label>Disabled Button Item</ion-label>
</ion-item>

<script>
  function testClick(ev) {
    console.log('Clicked item: ', ev.target.textContent.trim());
  }
</script>
```
