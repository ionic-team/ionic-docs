```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonTextarea } from '@ionic/react';
function Example() {
  return (
    <IonList>
      <IonItem>
        <IonLabel>Regular textarea</IonLabel>
        <IonTextarea placeholder="Type something here"></IonTextarea>
      </IonItem>
      <IonItem>
        <IonLabel>Readonly textarea</IonLabel>
        <IonTextarea readonly={true} placeholder="Can't edit this"></IonTextarea>
      </IonItem>
      <IonItem>
        <IonLabel>Disabled textarea</IonLabel>
        <IonTextarea disabled={true} placeholder="Can't type here"></IonTextarea>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
