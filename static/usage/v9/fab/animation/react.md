```tsx
import React from 'react';
import { IonContent, IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';
import { add, colorPalette, document, globe } from 'ionicons/icons';

function Example() {
  return (
    <IonContent>
      <IonFab slot="fixed" vertical="top" horizontal="start">
        <IonFabButton>
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
        <IonFabList side="bottom">
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

      <IonFab slot="fixed" vertical="top" horizontal="end">
        <IonFabButton animated={false}>
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
        <IonFabList side="bottom">
          <IonFabButton animated={false}>
            <IonIcon icon={document}></IonIcon>
          </IonFabButton>
          <IonFabButton animated={false}>
            <IonIcon icon={colorPalette}></IonIcon>
          </IonFabButton>
          <IonFabButton animated={false}>
            <IonIcon icon={globe}></IonIcon>
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </IonContent>
  );
}
export default Example;
```
