```tsx
import React from 'react';
import { 
  IonAccordion, 
  IonAccordionGroup,
  IonContent,
  IonItem, 
  IonLabel
} from '@ionic/react';
function Example() {
  return (
    <IonContent>
      <IonAccordionGroup multiple={true} value={['first', 'third']}>
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
    </IonContent>
  );
}
export default Example;
```
