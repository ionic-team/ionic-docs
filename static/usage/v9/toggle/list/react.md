```tsx
import React from 'react';
import { IonItem, IonList, IonToggle } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonToggle>Receive Push Notifications</IonToggle>
      </IonItem>
      <IonItem>
        <IonToggle>Receive Emails</IonToggle>
      </IonItem>
      <IonItem>
        <IonToggle>Receive Text Messages</IonToggle>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
