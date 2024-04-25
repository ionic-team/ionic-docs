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

<script>
  const accordionGroup = document.querySelector('ion-accordion-group');
  const values = ['first', 'second', 'third'];

  accordionGroup.addEventListener('ionChange', (ev) => {
    const collapsedItems = values.filter((value) => value !== ev.detail.value);
    const selectedValue = ev.detail.value;

    console.log(
      `Expanded: ${selectedValue === undefined ? 'None' : ev.detail.value} | Collapsed: ${collapsedItems.join(', ')}`
    );
  });
</script>
```
