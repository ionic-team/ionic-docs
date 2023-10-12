```tsx
import React from 'react';
import { IonList, IonItem, IonInput } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonInput enterkeyhint="search" labelPlacement="stacked" placeholder="Enter search query">
          <code slot="label">enterkeyhint="search"</code>
        </IonInput>
      </IonItem>
      <IonItem>
        <IonInput enterkeyhint="send" labelPlacement="stacked" placeholder="Type a message">
          <code slot="label">enterkeyhint="send"</code>
        </IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
