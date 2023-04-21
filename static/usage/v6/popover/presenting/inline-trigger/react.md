```tsx
import React from 'react';
import { IonButton, IonContent, IonPopover } from '@ionic/react';
function Example() {
  return (
    <>
      <IonButton id="click-trigger">Left-Click Me</IonButton>
      <IonPopover trigger="click-trigger" triggerAction="click">
        <IonContent class="ion-padding">Hello World!</IonContent>
      </IonPopover>

      <IonButton id="context-menu-trigger">Right-Click Me</IonButton>
      <IonPopover trigger="context-menu-trigger" triggerAction="context-menu">
        <IonContent class="ion-padding">Hello World!</IonContent>
      </IonPopover>

      <IonButton id="hover-trigger">Hover Over Me</IonButton>
      <IonPopover trigger="hover-trigger" triggerAction="hover">
        <IonContent class="ion-padding">Hello World!</IonContent>
      </IonPopover>
    </>
  );
}
export default Example;
```
