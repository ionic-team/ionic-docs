```tsx
import React from 'react';
import { IonRange } from '@ionic/react';
function Example() {
  return (
    <>
      <IonRange labelPlacement="start" label="Label at the Start"></IonRange>

      <br />

      <IonRange labelPlacement="end" label="Label at the End"></IonRange>

      <br />

      <IonRange labelPlacement="fixed" label="Fixed Width Label"></IonRange>

      <br />

      <IonRange labelPlacement="stacked" label="Stacked Label"></IonRange>
    </>
  );
}
export default Example;
```
