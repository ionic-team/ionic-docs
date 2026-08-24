```tsx
import React from 'react';
import { IonInput, IonInputPasswordToggle } from '@ionic/react';

function Example() {
  return (
    <IonInput type="password" label="Password" value="NeverGonnaGiveYouUp">
      <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
    </IonInput>
  );
}
export default Example;
```
