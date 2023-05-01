```tsx
import React from 'react';
import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/react';
import { archive, heart, trash } from 'ionicons/icons';

function Example() {
  return (
    <IonList>
      <IonItemSliding>
        <IonItemOptions side="start">
          <IonItemOption color="success">
            <IonIcon slot="icon-only" icon={archive}></IonIcon>
          </IonItemOption>
        </IonItemOptions>

        <IonItem>
          <IonLabel>Sliding Item with Icons Only</IonLabel>
        </IonItem>

        <IonItemOptions side="end">
          <IonItemOption>
            <IonIcon slot="icon-only" icon={heart}></IonIcon>
          </IonItemOption>
          <IonItemOption color="danger">
            <IonIcon slot="icon-only" icon={trash}></IonIcon>
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItemOptions side="start">
          <IonItemOption color="success">
            <IonIcon slot="start" icon={archive}></IonIcon>
            Archive
          </IonItemOption>
        </IonItemOptions>

        <IonItem>
          <IonLabel>
            Sliding Item with Start Icons
          </IonLabel>
        </IonItem>

        <IonItemOptions side="end">
          <IonItemOption>
            <IonIcon slot="start" icon={heart}></IonIcon>
            Favorite
          </IonItemOption>
          <IonItemOption color="danger">
            <IonIcon slot="start" icon={trash}></IonIcon>
            Delete
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItemOptions side="start">
          <IonItemOption color="success">
            <IonIcon slot="end" icon={archive}></IonIcon>
            Archive
          </IonItemOption>
        </IonItemOptions>

        <IonItem>
          <IonLabel>
            Sliding Item with End Icons
          </IonLabel>
        </IonItem>

        <IonItemOptions>
          <IonItemOption>
            <IonIcon slot="end" icon={heart}></IonIcon>
            Favorite
          </IonItemOption>
          <IonItemOption color="danger">
            <IonIcon slot="end" icon={trash}></IonIcon>
            Delete
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItemOptions side="start">
          <IonItemOption color="success">
            <IonIcon slot="top" icon={archive}></IonIcon>
            Archive
          </IonItemOption>
        </IonItemOptions>

        <IonItem>
          <IonLabel>
            Sliding Item with Top Icons
          </IonLabel>
        </IonItem>

        <IonItemOptions>
          <IonItemOption>
            <IonIcon slot="top" icon={heart}></IonIcon>
            Favorite
          </IonItemOption>
          <IonItemOption color="danger">
            <IonIcon slot="top" icon={trash}></IonIcon>
            Delete
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItemOptions side="start">
          <IonItemOption color="success">
            <IonIcon slot="bottom" icon={archive}></IonIcon>
            Archive
          </IonItemOption>
        </IonItemOptions>

        <IonItem>
          <IonLabel>
            Sliding Item with Bottom Icons
          </IonLabel>
        </IonItem>

        <IonItemOptions>
          <IonItemOption>
            <IonIcon slot="bottom" icon={heart}></IonIcon>
            Favorite
          </IonItemOption>
          <IonItemOption color="danger">
            <IonIcon slot="bottom" icon={trash}></IonIcon>
            Delete
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList>
  );
}
export default Example;
```
