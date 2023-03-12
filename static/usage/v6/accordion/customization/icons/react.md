```tsx
import React from 'react';
import { 
  IonAccordion, 
  IonAccordionGroup,
  IonItem, 
  IonLabel
} from '@ionic/react';
import { caretDownCircle } from 'ionicons/icons';

function Example() {
  return (
    <IonAccordionGroup>
      <IonAccordion value="first" toggleIcon={caretDownCircle} toggleIconSlot="start">
        <IonItem slot="header" color="light">
          <IonLabel>First Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          First Content
        </div>
      </IonAccordion>
      <IonAccordion value="second" toggleIcon={caretDownCircle} toggleIconSlot="start">
        <IonItem slot="header" color="light">
          <IonLabel>Second Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Second Content
        </div>
      </IonAccordion>
      <IonAccordion value="third" toggleIcon={caretDownCircle} toggleIconSlot="start">
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
