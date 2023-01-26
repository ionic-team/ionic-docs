```tsx
import React from 'react';
import { IonButton } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonButton fill="solid">Solid</IonButton>
      <IonButton fill="outline">Outline</IonButton>
      <IonButton fill="clear">Clear</IonButton>
      <IonButton size="small">Small</IonButton>
      <IonButton size="default">Default</IonButton>
      <IonButton size="large">Large</IonButton>
      <IonButton strong="true">Strong</IonButton>
      <IonButton shape="round">Rounded</IonButton>
      <IonButton strong="true" shape="round">Strong Rounded</IonButton>
    </>
  );
}
export default Example;
```
