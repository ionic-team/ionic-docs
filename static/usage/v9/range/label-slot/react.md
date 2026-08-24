```tsx
import React from 'react';
import { IonRange, IonText } from '@ionic/react';
function Example() {
  return (
    <IonRange>
      <div slot="label">
        Label with <IonText color="primary">custom HTML</IonText>
      </div>
    </IonRange>
  );
}
export default Example;
```
