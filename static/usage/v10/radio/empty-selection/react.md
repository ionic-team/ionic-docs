```tsx
import React from 'react';
import { IonRadio, IonRadioGroup } from '@ionic/react';

function Example() {
  return (
    <IonRadioGroup allowEmptySelection={true} value="turtles">
      <IonRadio value="dogs">Dogs</IonRadio>
      <br />
      <IonRadio value="cats">Cats</IonRadio>
      <br />
      <IonRadio value="turtles">Turtles</IonRadio>
      <br />
      <IonRadio value="fish">Fish</IonRadio>
      <br />
    </IonRadioGroup>
  );
}
export default Example;
```
