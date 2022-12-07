```tsx
import React from 'react';
import { IonButton, IonContent, IonPopover } from '@ionic/react';
function Example() {
  return (
    <IonContent>
      <IonButton id="open-popover">Open Popover</IonButton>
      <IonPopover keepContentsMounted={true} trigger="open-popover">
        <IonContent class="ion-padding">This content was mounted as soon as the popover was created.</IonContent>
      </IonPopover>
    </IonContent>
  );
}
export default Example;
```
