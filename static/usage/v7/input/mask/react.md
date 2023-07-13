```tsx
import React from 'react';
import { IonInput, IonItem, IonList } from '@ionic/react';
import { useMaskito } from '@maskito/react';

function Example() {
  const cardMask = useMaskito({
    options: {
      mask: [
        ...Array(4).fill(/\d/),
        ' ',
        ...Array(4).fill(/\d/),
        ' ',
        ...Array(4).fill(/\d/),
        ' ',
        ...Array(4).fill(/\d/),
        ' ',
        ...Array(3).fill(/\d/),
      ],
    },
  });

  const phoneMask = useMaskito({
    options: {
      mask: ['+', '1', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    },
  });

  return (
    <IonList>
      <IonItem>
        <IonInput
          ref={async (cardRef) => {
            if (cardRef) {
              const input = await cardRef.getInputElement();
              cardMask(input);
            }
          }}
          label="Card number"
          placeholder="0000 0000 0000 0000"
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonInput
          ref={async (phoneInput) => {
            if (phoneInput) {
              const input = await phoneInput.getInputElement();
              phoneMask(input);
            }
          }}
          label="US phone number"
          placeholder="+1 (xxx) xxx-xxxx"
        ></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
