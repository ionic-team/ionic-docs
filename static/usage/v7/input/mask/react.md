```tsx
import React from 'react';
import { IonInput, IonItem, IonList } from '@ionic/react';
import { useMaskito } from '@maskito/react';

function Example() {
  const cardRef = useMaskito({
    options: {
      mask: [
        ...Array(4).fill(/\d/),
        ' ',
        ...Array(4).fill(/\d/),
        ' ',
        ...Array(4).fill(/\d/),
        ' ',
        ...Array(4).fill(/\d/),
      ],
    },
  });

  const phoneRef = useMaskito({
    options: {
      mask: ['+', '1', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    },
  });

  return (
    <IonList>
      <IonItem>
        <IonInput ref={cardRef} label="Card number" placeholder="0000 0000 0000 0000"></IonInput>
      </IonItem>
      <IonItem>
        <IonInput ref={phoneRef} label="US Phone number" placeholder="+1 (xxx) xxx-xxxx"></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
