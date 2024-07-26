```tsx
import React, { useRef, useEffect } from 'react';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';
function Example() {
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);

  useEffect(() => {
    if (!accordionGroup.current) {
      return;
    }

    accordionGroup.current.value = ['first', 'third'];
  }, []);

  return (
    <IonAccordionGroup ref={accordionGroup} multiple={true}>
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
