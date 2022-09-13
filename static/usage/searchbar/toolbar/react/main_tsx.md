```tsx
import React from 'react';
import { IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonToolbar color="light" class="md-hide">
        <IonTitle>
          Searchbar
        </IonTitle>
      </IonToolbar>
      <IonToolbar color="light">
        <IonSearchbar></IonSearchbar>
      </IonToolbar>
    </>
  );
}
export default Example;
```
