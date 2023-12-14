```tsx
import React, { useState } from 'react';
import { IonButton, IonPickerLegacy } from '@ionic/react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IonButton onClick={() => setIsOpen(true)}>Open</IonButton>
      <IonPickerLegacy
        isOpen={isOpen}
        onDidDismiss={() => setIsOpen(false)}
        columns={[
          {
            name: 'languages',
            options: [
              {
                text: 'JavaScript',
                value: 'javascript',
              },
              {
                text: 'TypeScript',
                value: 'typescript',
              },
              {
                text: 'Rust',
                value: 'rust',
              },
              {
                text: 'C#',
                value: 'c#',
              },
            ],
          },
        ]}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Confirm',
            handler: (value) => {
              console.log(`You selected: ${value.languages.value}`);
            },
          },
        ]}
      ></IonPickerLegacy>
    </>
  );
}

export default Example;
```
