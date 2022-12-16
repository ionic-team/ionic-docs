```tsx
import React from 'react';
import { IonButton, IonToast } from '@ionic/react';
import { globe } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonButton id="open-toast">Open Toast</IonButton>
      <IonToast trigger="open-toast" message="Hello World!" duration={3000} icon={globe}></IonToast>
    </>
  );
}
export default Example;
```
