```tsx
import React from 'react';
import { IonButton, IonContent, IonPage, useIonPicker } from '@ionic/react';

function Example() {
  const [present] = useIonPicker();

  const openPicker = async () => {
    present({
      columns: [
        {
          name: 'programming-languages',
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
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: (value) => {},
        },
      ],
    });
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonButton onClick={openPicker}>Open</IonButton>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
