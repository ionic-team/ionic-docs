```tsx
import React from 'react';
import { IonRadio, IonRadioGroup } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonRadioGroup value="custom-checked">
      <IonRadio value="custom"></IonRadio>
      <IonRadio value="custom-checked"></IonRadio>
    </IonRadioGroup>
  );
}
export default Example;
```
