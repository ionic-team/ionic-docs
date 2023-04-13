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

<ion-button onclick="toggleAccordion()">Toggle Second Accordion</ion-button>

<script>
  const accordionGroup = document.querySelector('ion-accordion-group');
  var toggleAccordion = () => {
    if (accordionGroup.value === 'second') {
      accordionGroup.value = undefined;
    } else {
      accordionGroup.value = 'second';
    }
  };
</script>
```
