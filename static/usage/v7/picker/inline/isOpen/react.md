```tsx
import React, { useState } from 'react';
import { IonButton, IonPicker } from '@ionic/react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IonButton onClick={() => setIsOpen(true)}>Open</IonButton>
      <IonPicker
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
              window.alert(`You selected: ${value.languages.value}`);
            },
          },
        ]}
      ></IonPicker>
    </>
  );
}

export default Example;
```
