```tsx
import React from 'react';
import { IonSearchbar } from '@ionic/react';
import { searchCircle } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonSearchbar></IonSearchbar>
      <IonSearchbar searchIcon={searchCircle} placeholder="Custom Search Icon"></IonSearchbar>
    </>
  );
}
export default Example;
```
