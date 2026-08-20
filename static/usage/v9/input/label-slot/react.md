```tsx
import React from 'react';
import { IonInput, IonItem, IonList, IonText } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonInput labelPlacement="floating" value="hi@ionic.io">
          <div slot="label">
            Email <IonText color="danger">(Required)</IonText>
          </div>
        </IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
