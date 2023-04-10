```tsx
import React from 'react';
import { IonButton, IonContent, IonPopover } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <div className="container">
      <IonButton id="top-center">Side=Top, Alignment=Center</IonButton>
      <IonPopover trigger="top-center" side="top" alignment="center">
        <IonContent class="ion-padding">Hello World!</IonContent>
      </IonPopover>

      <IonButton id="bottom-start">Side=Bottom, Alignment=Start</IonButton>
      <IonPopover trigger="bottom-start" side="bottom" alignment="start">
        <IonContent class="ion-padding">Hello World!</IonContent>
      </IonPopover>

      <IonButton id="left-start">Side=Left, Alignment=Start</IonButton>
      <IonPopover trigger="left-start" side="left" alignment="start">
        <IonContent class="ion-padding">Hello World!</IonContent>
      </IonPopover>

      <IonButton id="right-end">Side=Right, Alignment=End</IonButton>
      <IonPopover trigger="right-end" side="right" alignment="end">
        <IonContent class="ion-padding">Hello World!</IonContent>
      </IonPopover>
    </div>
  );
}
export default Example;
```
