```tsx
import { useState } from 'react';
import { IonInput, IonItem, IonList } from '@ionic/react';

import { MaskitoOptions, maskitoTransform } from '@maskito/core';
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

  const phoneMaskOptions: MaskitoOptions = {
    mask: ['+', '1', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  };
  const phoneMask = useMaskito({ options: phoneMaskOptions });

  //If you need to set an initial value, you can use maskitoTransform to ensure the value is valid
  const [myPhoneNumber, setMyPhoneNumber] = useState(maskitoTransform('5555551212', phoneMaskOptions));

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
          value={myPhoneNumber}
          onIonInput={(e) => setMyPhoneNumber(e.detail.value || '')}
          label="US phone number"
          placeholder="+1 (xxx) xxx-xxxx"
        ></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
