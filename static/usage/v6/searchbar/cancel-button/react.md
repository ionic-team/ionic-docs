```tsx
import React from 'react';
import { IonSearchbar } from '@ionic/react';
import { trash } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonSearchbar showCancelButton="focus" placeholder="Show on Focus"></IonSearchbar>
      <IonSearchbar showCancelButton="always" placeholder="Always Show"></IonSearchbar>
      <IonSearchbar showCancelButton="never" placeholder="Never Show"></IonSearchbar>
      <IonSearchbar showCancelButton="always" cancelButtonText="Custom Cancel" cancelButtonIcon={trash} placeholder="Custom Cancel Button"></IonSearchbar>
    </>
  );
}
export default Example;
```
