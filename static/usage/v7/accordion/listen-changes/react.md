```tsx
import React from 'react';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, AccordionGroupCustomEvent } from '@ionic/react';
function Example() {
  const values = ['first', 'second', 'third'];
  const accordionGroupChange = (event: AccordionGroupCustomEvent) => {
    const collapsedItems = values.filter((value) => value !== event.detail.value);
    const selectedValue = event.detail.value;

    console.log(
      `Expanded: ${selectedValue === undefined ? 'None' : event.detail.value} | Collapsed: ${collapsedItems.join(', ')}`
    );
  };

  return (
    <IonAccordionGroup onIonChange={accordionGroupChange}>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>First Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          First Content
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>Second Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Second Content
        </div>
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>Third Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Third Content
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
export default Example;
```
