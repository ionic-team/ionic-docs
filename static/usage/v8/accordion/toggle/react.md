```tsx
import React, { useRef } from 'react';
import { IonAccordion, IonAccordionGroup, IonButton, IonItem, IonLabel } from '@ionic/react';
function Example() {
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);
  const toggleAccordion = () => {
    if (!accordionGroup.current) {
      return;
    }
    const nativeEl = accordionGroup.current;

    if (nativeEl.value === 'second') {
      nativeEl.value = undefined;
    } else {
      nativeEl.value = 'second';
    }
  };
  return (
    <>
      <IonAccordionGroup ref={accordionGroup}>
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
      <IonButton onClick={toggleAccordion}>Toggle Second Accordion</IonButton>
    </>
  );
}
export default Example;
```
