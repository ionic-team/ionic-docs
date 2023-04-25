```tsx
import React from 'react';
import { IonIcon } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonIcon icon={logoIonic}></IonIcon>
      <IonIcon icon={logoIonic} size="large"></IonIcon>
      <IonIcon icon={logoIonic} color="primary"></IonIcon>
      <IonIcon icon={logoIonic} size="large" color="primary"></IonIcon>
    </>
  );
}
export default Example;
```
