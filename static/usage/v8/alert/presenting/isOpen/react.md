```tsx
import React, { useState } from 'react';
import { IonAlert, IonButton } from '@ionic/react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IonButton onClick={() => setIsOpen(true)}>Click Me</IonButton>
      <IonAlert
        isOpen={isOpen}
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={['Action']}
        onDidDismiss={() => setIsOpen(false)}
      ></IonAlert>
    </>
  );
}
export default Example;
```
