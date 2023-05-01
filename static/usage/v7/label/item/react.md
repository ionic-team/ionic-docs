```tsx
import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel>Default Label</IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel>
          Multi-line text that should ellipsis when it is too long
          to fit on one line. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel class="ion-text-wrap">
          Multi-line text that should wrap when it is too long
          to fit on one line. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonLabel>
          <h1>Heading</h1>
          <p>Paragraph</p>
        </IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```
