
```tsx
import React from 'react';
import { IonProgressBar } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonProgressBar value={.25} buffer={.5}></IonProgressBar>
      <IonProgressBar type="indeterminate"></IonProgressBar>
    </>
  );
}
export default Example;
```
