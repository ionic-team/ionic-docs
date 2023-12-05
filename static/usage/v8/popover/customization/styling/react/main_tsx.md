```tsx
import React from 'react';
import { IonButton, IonContent, IonPopover } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonButton id="trigger-button">Click Me</IonButton>
      <IonPopover trigger="trigger-button">
        <IonContent className="ion-padding">Hello Styled World!</IonContent>
      </IonPopover>
    </>
  );
}
export default Example;
```
