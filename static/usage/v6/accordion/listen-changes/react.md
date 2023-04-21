```tsx
import React, { useRef } from 'react';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, AccordionGroupCustomEvent } from '@ionic/react';
function Example() {
  const listenerOut = useRef<null | HTMLParagraphElement>(null);
  const values = ['first', 'second', 'third'];
  const accordionGroupChange = (ev: AccordionGroupCustomEvent) => {
    const nativeEl = listenerOut.current;
    if (!nativeEl) {
      return;
    }

    const collapsedItems = values.filter((value) => value !== ev.detail.value);
    const selectedValue = ev.detail.value;

    nativeEl.innerText = `
      Expanded: ${selectedValue === undefined ? 'None' : ev.detail.value}
      Collapsed: ${collapsedItems.join(', ')}
    `;
  };

  return (
    <>
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
      <p ref={listenerOut}></p>
    </>
  );
}
export default Example;
```
