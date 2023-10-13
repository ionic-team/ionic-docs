```tsx
import React from 'react';
import { IonList, IonItem, IonInput } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonInput inputmode="email" labelPlacement="stacked" placeholder="Enter a username or email address">
          <code slot="label">inputmode="email"</code>
        </IonInput>
      </IonItem>
      <IonItem>
        <IonInput inputmode="numeric" labelPlacement="stacked" placeholder="Enter an integer">
          <code slot="label">inputmode="numeric"</code>
        </IonInput>
      </IonItem>
      <IonItem>
        <IonInput inputmode="decimal" labelPlacement="stacked" placeholder="Enter a decimal">
          <code slot="label">inputmode="decimal"</code>
        </IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
