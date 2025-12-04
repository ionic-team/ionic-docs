```tsx
import React from 'react';
import { IonButton, IonLoading } from '@ionic/react';
function Example() {
  return (
    <>
      <IonButton id="open-loading">Show Loading</IonButton>
      <IonLoading trigger="open-loading" message="Dismissing after 3 seconds..." duration={3000} />
    </>
  );
}
export default Example;
```
