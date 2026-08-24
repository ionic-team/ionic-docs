```tsx
import React from 'react';
import { IonDatetime } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonDatetime presentation="date">
        <span slot="title">Select Date</span>
      </IonDatetime>
    </>
  );
}
export default Example;
```
