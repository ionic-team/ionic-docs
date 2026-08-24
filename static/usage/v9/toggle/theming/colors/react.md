```tsx
import React from 'react';
import { IonToggle } from '@ionic/react';

function Example() {
  return (
    <>
      <IonToggle aria-label="Primary toggle" color="primary" checked={true}></IonToggle>
      <IonToggle aria-label="Secondary toggle" color="secondary" checked={true}></IonToggle>
      <IonToggle aria-label="Tertiary toggle" color="tertiary" checked={true}></IonToggle>
      <IonToggle aria-label="Success toggle" color="success" checked={true}></IonToggle>
      <IonToggle aria-label="Warning toggle" color="warning" checked={true}></IonToggle>
      <IonToggle aria-label="Danger toggle" color="danger" checked={true}></IonToggle>
      <IonToggle aria-label="Light toggle" color="light" checked={true}></IonToggle>
      <IonToggle aria-label="Medium toggle" color="medium" checked={true}></IonToggle>
      <IonToggle aria-label="Dark toggle" color="dark" checked={true}></IonToggle>
    </>
  );
}
export default Example;
```
