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
        header="Alert"
        subHeader="Important message"
        message="This is an alert!"
        buttons={['OK']}
        onDidDismiss={() => setIsOpen(false)}
      ></IonAlert>
    </>
  );
}
export default Example;
```
