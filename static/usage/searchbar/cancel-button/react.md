```tsx
import React from 'react';
import { IonSearchbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonSearchbar showCancelButton="always" placeholder="Always Show"></IonSearchbar>
      <IonSearchbar showCancelButton="never" placeholder="Never Show"></IonSearchbar>
      <IonSearchbar showCancelButton="focus" placeholder="Show on Focus"></IonSearchbar>
      <IonSearchbar showCancelButton="focus" cancelButtonText="Custom Cancel" placeholder="Show on Focus"></IonSearchbar>
    </>
  );
}
export default Example;
```
