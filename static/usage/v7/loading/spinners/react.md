```tsx
import React from 'react';
import { IonButton, useIonLoading } from '@ionic/react';
function Example() {
  return (
    <>
      <IonButton id="open-loading">Show Loading</IonButton>
      <IonLoading trigger="open-loading" message="Loading..." duration={3000} spinner="circles" />
    </>
  );
}
export default Example;
```
