```html
<ion-accordion-group>
  <ion-accordion value="first">
    <ion-item slot="header">
      <ion-label>First Accordion</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">
      First Content
    </div>
  </ion-accordion>
  <ion-accordion value="second">
    <ion-item slot="header">
      <ion-label>Second Accordion</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">
      Second Content
    </div>
  </ion-accordion>
  <ion-accordion value="third">
    <ion-item slot="header">
      <ion-label>Third Accordion</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">
      Third Content
    </div>
  </ion-accordion>
</ion-accordion-group>

<style>
  ion-accordion {
    margin: 0 auto;
  }

  ion-accordion.accordion-expanding,
  ion-accordion.accordion-expanded {
    width: calc(100% - 32px);

    margin: 16px auto;
  }

  ion-accordion.accordion-collapsing ion-item[slot="header"],
  ion-accordion.accordion-collapsed ion-item[slot="header"] {
    --background: var(--ion-color-light);
    --color: var(--ion-color-light-contrast);
  }

  ion-accordion.accordion-expanding ion-item[slot="header"],
  ion-accordion.accordion-expanded ion-item[slot="header"] {
    --background: var(--ion-color-primary);
    --color: var(--ion-color-primary-contrast);
  }
</style>
```
