```html
<ion-accordion-group>
  <ion-accordion value="first">
    <ion-item slot="header" color="light">
      <ion-label>First Accordion</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">First Content</div>
  </ion-accordion>
  <ion-accordion value="second">
    <ion-item slot="header" color="light">
      <ion-label>Second Accordion</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">Second Content</div>
  </ion-accordion>
  <ion-accordion value="third">
    <ion-item slot="header" color="light">
      <ion-label>Third Accordion</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">Third Content</div>
  </ion-accordion>
</ion-accordion-group>

<p class="listener-out"></p>

<script>
  const accordionGroup = document.querySelector('ion-accordion-group');
  const listenerOut = document.querySelector('.listener-out');
  const values = ['first', 'second', 'third'];

  accordionGroup.addEventListener('ionChange', (ev) => {
    const collapsedItems = values.filter((value) => value !== ev.detail.value);
    const selectedValue = ev.detail.value;

    listenerOut.innerText = `
      Expanded: ${selectedValue === undefined ? 'None' : ev.detail.value}
      Collapsed: ${collapsedItems.join(', ')}
    `;
  });
</script>
```
