```tsx
import React from 'react';
import { IonTextarea, IonItem, IonList, IonText } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonTextarea labelPlacement="floating" value="Lorem Ipsum">
          <div slot="label">
            Comments <IonText color="danger">(Required)</IonText>
          </div>
        </IonTextarea>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
