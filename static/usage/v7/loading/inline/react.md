```tsx
import React from 'react';
import { IonButton, IonContent, IonLoading } from '@ionic/react';
function Example() {
  return (
    <IonContent>
      <IonButton id="open-loading">Show Loading</IonButton>
      <IonLoading trigger="open-loading" message="Dismissing after 3 seconds..." duration={3000} />
    </IonContent>
  );
}
export default Example;
```
