```tsx
import React from 'react';
import { IonRadio, IonRadioGroup } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonRadioGroup value="custom-checked">
      <IonRadio value="custom" aria-label="Custom checkbox"></IonRadio>
      <IonRadio value="custom-checked" aria-label="Custom checkbox that is checked"></IonRadio>
    </IonRadioGroup>
  );
}
export default Example;
```
