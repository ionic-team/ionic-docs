```tsx
import React from 'react';
import { IonBadge, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { heart, calendar } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonTabBar color="light">
        <IonTabButton tab="tab1">
          <IonIcon icon={heart} />
          <IonLabel>Favorites</IonLabel>
          <IonBadge color="danger"></IonBadge>
        </IonTabButton>
        <IonTabButton tab="tab2">
          <IonIcon icon={calendar} />
          <IonBadge color="danger">47</IonBadge>
        </IonTabButton>
      </IonTabBar>
    </>
  );
}
export default Example;
```
