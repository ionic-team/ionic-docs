```tsx
import React from 'react';
import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';
import { add, colorPalette, document, globe } from 'ionicons/icons';

function Example() {
  return (
    <IonFab>
      <IonFabButton size="small">
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
      <IonFabList side="end">
        <IonFabButton>
          <IonIcon icon={document}></IonIcon>
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={colorPalette}></IonIcon>
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={globe}></IonIcon>
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
}
export default Example;
```
