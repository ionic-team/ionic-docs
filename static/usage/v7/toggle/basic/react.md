```tsx
import React from 'react';
import { IonToggle } from '@ionic/react';

function Example() {
  return (
    <>
      <IonToggle>Default Toggle</IonToggle>
      <br />
      <br />
      <IonToggle checked={true}>Checked Toggle</IonToggle>
      <br />
      <br />
      <IonToggle disabled={true}>Disabled Toggle</IonToggle>
      <br />
      <br />
      <IonToggle checked={true} disabled={true}>
        Disabled Checked Toggle
      </IonToggle>
    </>
  );
}
export default Example;
```
