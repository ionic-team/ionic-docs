```tsx
import React from 'react';
import { IonSearchbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonSearchbar></IonSearchbar>
      <IonSearchbar placeholder="Custom Placeholder"></IonSearchbar>
      <IonSearchbar disabled={true} placeholder="Disabled"></IonSearchbar>
      <IonSearchbar value="Value"></IonSearchbar>
      <IonSearchbar animated={true} placeholder="Animated"></IonSearchbar>
    </>
  );
}
export default Example;
```
