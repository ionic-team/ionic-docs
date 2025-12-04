```tsx
import React, { useRef, useState } from 'react';
import {
  IonModal,
  IonToolbar,
  IonButtons,
  IonButton,
  IonPicker,
  IonPickerColumn,
  IonPickerColumnOption,
} from '@ionic/react';

import './main.css';

function Example() {
  const modal = useRef<HTMLIonModalElement>(null);
  const [value, setValue] = useState<string | number | undefined>('javascript');

  return (
    <>
      <IonButton id="open-modal">Open modal</IonButton>
      <IonModal
        ref={modal}
        trigger="open-modal"
        isOpen={true}
        onDidDismiss={({ detail }) => console.log('didDismiss', JSON.stringify(detail))}
      >
        <IonToolbar>
          <IonButtons>
            <IonButton onClick={() => modal.current!.dismiss(null, 'cancel')}>Cancel</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => modal.current!.dismiss(value, 'confirm')}>Done</IonButton>
          </IonButtons>
        </IonToolbar>
        <IonPicker>
          <IonPickerColumn value={value} onIonChange={({ detail }) => setValue(detail.value)}>
            <IonPickerColumnOption value="" disabled={true}>
              --
            </IonPickerColumnOption>
            <IonPickerColumnOption value="javascript">Javascript</IonPickerColumnOption>
            <IonPickerColumnOption value="typescript">Typescript</IonPickerColumnOption>
            <IonPickerColumnOption value="rust">Rust</IonPickerColumnOption>
            <IonPickerColumnOption value="c#">C#</IonPickerColumnOption>
          </IonPickerColumn>
        </IonPicker>
      </IonModal>
    </>
  );
}

export default Example;
```
