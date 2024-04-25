```tsx
import React from 'react';
import { IonToggle } from '@ionic/react';

function Example() {
  return (
    <>
      <IonToggle labelPlacement="start">Label at the Start</IonToggle>
      <br />
      <br />
      <IonToggle labelPlacement="end">Label at the End</IonToggle>
      <br />
      <br />
      <IonToggle labelPlacement="fixed">Fixed Width Label</IonToggle>
      <br />
      <br />
      <IonToggle labelPlacement="stacked">Stacked Label</IonToggle>
    </>
  );
}
export default Example;
```
