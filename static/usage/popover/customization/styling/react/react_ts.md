```tsx
import React from 'react';
import { IonButton, IonContent, IonPopover } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonContent>
      <IonButton id="trigger-button">Click Me</IonButton>
      <IonPopover trigger="trigger-button">Hello Styled World!</IonPopover>
    </IonContent>
  );
}
export default Example;
```
