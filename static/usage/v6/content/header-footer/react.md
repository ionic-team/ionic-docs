```tsx
import React from 'react';
import { IonContent, IonFooter, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Header
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <p>Here's a small text description for the content. Nothing more, nothing less.</p>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>
            Footer
          </IonTitle>
        </IonToolbar>
      </IonFooter>
    </>
  );
}
export default Example;
```
