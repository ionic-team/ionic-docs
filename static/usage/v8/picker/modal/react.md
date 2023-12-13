```tsx
import React, { useRef, useState } from 'react';
import {
  IonModal,
  IonContent,
  IonToolbar,
  IonButtons,
  IonButton,
  IonPicker,
  IonPickerColumn,
  IonPickerColumnOption,
} from '@ionic/react';

function Example() {
  const modal = useRef<HTMLIonModalElement>(null);
  const [value, setValue] = useState<string | number | undefined>();

  return (
    <>
      <IonButton id="open-modal">Open modal</IonButton>
      <IonModal
        ref={modal}
        trigger="open-modal"
        isOpen={true}
        initialBreakpoint={0.5}
        onDidDismiss={({ detail }) => console.log('didDismiss', JSON.stringify(detail))}
      >
        <IonContent>
          <IonToolbar>
            <IonButtons>
              <IonButton onClick={() => modal.current!.dismiss(null, 'cancel')}>Cancel</IonButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={() => modal.current!.dismiss(value, 'confirm')}>Done</IonButton>
            </IonButtons>
          </IonToolbar>
          <IonPicker>
            <IonPickerColumn onIonChange={({ detail }) => setValue(detail.value)}>
              <IonPickerColumnOption value="" disabled={true}>
                --
              </IonPickerColumnOption>
              <IonPickerColumnOption value="javascript">Javascript</IonPickerColumnOption>
              <IonPickerColumnOption value="typescript">Typescript</IonPickerColumnOption>
              <IonPickerColumnOption value="rust">Rust</IonPickerColumnOption>
              <IonPickerColumnOption value="c#">C#</IonPickerColumnOption>
            </IonPickerColumn>
          </IonPicker>
        </IonContent>
      </IonModal>
    </>
  );
}

export default Example;
```
