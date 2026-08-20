```tsx
import React from 'react';
import { IonItem, IonList, IonTextarea } from '@ionic/react';
function Example() {
  return (
    <IonList>
      <IonItem>
        <IonTextarea label="Regular textarea" placeholder="Type something here"></IonTextarea>
      </IonItem>
      <IonItem>
        <IonTextarea readonly={true} label="Readonly textarea" placeholder="Can't edit this"></IonTextarea>
      </IonItem>
      <IonItem>
        <IonTextarea disabled={true} label="Disabled textarea" placeholder="Can't type here"></IonTextarea>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
