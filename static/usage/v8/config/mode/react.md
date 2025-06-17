```tsx
import React from 'react';
import { IonButton } from '@ionic/react';

import { getMode } from '@ionic/core';

function Example() {
  const mode = getMode();

  return (
    <>
      <IonButton color={mode === 'ios' ? 'secondary' : 'tertiary'}>Default</IonButton>
    </>
  );
}
export default Example;
```
