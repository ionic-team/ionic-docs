```tsx
import React from 'react';
import { IonSearchbar } from '@ionic/react';
import { trashBin } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonSearchbar showClearButton="focus" value="Show on Focus"></IonSearchbar>
      <IonSearchbar showClearButton="always" value="Always Show"></IonSearchbar>
      <IonSearchbar showClearButton="never" value="Never Show"></IonSearchbar>
      <IonSearchbar showClearButton="always" clearIcon={trashBin} value="Custom Clear Icon"></IonSearchbar>
    </>
  );
}
export default Example;
```
