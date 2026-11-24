```tsx
import React from 'react';
import { IonToggle } from '@ionic/react';
import { moon, sunny } from 'ionicons/icons';

function Example() {
  return (
    <IonToggle enableOnOffLabels={true} checkedIcon={moon} uncheckedIcon={sunny}>
      Dark Mode
    </IonToggle>
  );
}
export default Example;
```
