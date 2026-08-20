```tsx
import React from 'react';
import { IonProgressBar } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonProgressBar value={0.25} buffer={0.5}></IonProgressBar>
      <IonProgressBar type="indeterminate"></IonProgressBar>
    </>
  );
}
export default Example;
```
