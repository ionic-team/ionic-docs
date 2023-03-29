```tsx
import React from 'react';
import { IonButton, IonLoading } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonButton id="open-loading">Show Loading</IonButton>
      <IonLoading className="custom-loading" trigger="open-loading" message="Loading" duration={3000} />
    </>
  );
}
export default Example;
```
