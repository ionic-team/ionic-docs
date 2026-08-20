```tsx
import React from 'react';
import { IonButton, IonContent, IonItem, IonList, IonPopover } from '@ionic/react';
function Example() {
  return (
    <>
      <IonButton id="popover-button">Open Menu</IonButton>
      <IonPopover trigger="popover-button" dismissOnSelect={true}>
        <IonContent>
          <IonList>
            <IonItem button={true} detail={false}>
              Option 1
            </IonItem>
            <IonItem button={true} detail={false}>
              Option 2
            </IonItem>
            <IonItem button={true} id="nested-trigger">
              More options...
            </IonItem>

            <IonPopover trigger="nested-trigger" dismissOnSelect={true} side="end">
              <IonContent>
                <IonList>
                  <IonItem button={true} detail={false}>
                    Nested option
                  </IonItem>
                </IonList>
              </IonContent>
            </IonPopover>
          </IonList>
        </IonContent>
      </IonPopover>
    </>
  );
}
export default Example;
```
