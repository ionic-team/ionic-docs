```tsx
import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';

function Example() {
  const testClick = (ev: React.MouseEvent) => {
    const target = ev.target as HTMLElement;
    if (target) console.log('Clicked item: ', (target as HTMLButtonElement).textContent?.trim());
  };

  return (
    <>
      <IonItem href="#" onClick={(ev) => testClick(ev)}>
        <IonLabel>Anchor Item</IonLabel>
      </IonItem>

      <IonItem href="#" disabled={true} onClick={(ev) => testClick(ev)}>
        <IonLabel>Disabled Anchor Item</IonLabel>
      </IonItem>

      <IonItem button onClick={(ev) => testClick(ev)}>
        <IonLabel>Button Item</IonLabel>
      </IonItem>

      <IonItem button disabled={true} onClick={(ev) => testClick(ev)}>
        <IonLabel>Disabled Button Item</IonLabel>
      </IonItem>
    </>
  );
}
export default Example;
```
