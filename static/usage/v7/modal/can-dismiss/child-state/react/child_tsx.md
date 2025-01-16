```tsx
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent,
  IonList,
  IonItem,
  IonCheckbox,
  IonNote,
} from '@ionic/react';

import type { CheckboxCustomEvent } from '@ionic/core/components';

interface ChildProps {
  dismissChange: (checked: boolean) => void;
  dismiss: () => void;
}

function Child({ dismissChange, dismiss }: ChildProps) {
  const checkboxChanged = (event: CheckboxCustomEvent) => {
    const checked = event.detail.checked;
    dismissChange(checked);
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Modal</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => dismiss()}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonCheckbox onIonChange={checkboxChanged}>
              Override Dismiss
              <br />
              <IonNote className="ion-text-wrap">
                Toggle the checkbox to allow immediately dismissing the modal without a prompt.
              </IonNote>
            </IonCheckbox>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
}
export default Child;
```
