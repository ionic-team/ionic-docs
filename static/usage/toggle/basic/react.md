```tsx
import React from 'react';
import { IonToggle } from '@ionic/react';

function Example() {
  return (
    <>
      <IonToggle></IonToggle>
      <IonToggle checked={true}></IonToggle>
      <IonToggle disabled={true}></IonToggle>
      <IonToggle disabled={true} checked={true}></IonToggle>
    </>
  );
}
export default Example;
```
