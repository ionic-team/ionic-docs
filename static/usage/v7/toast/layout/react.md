```tsx
import React from 'react';
import { IonButton, IonToast } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton id="open-stacked-toast">Open Stacked Layout Toast</IonButton>
      <IonButton id="open-inline-toast">Open Baseline Layout Toast</IonButton>
      <IonToast
        trigger="open-inline-toast"
        message="This is a toast with a long message and a button that appears on the same line."
        duration={3000}
        buttons={[
          {
            text: 'Action With Long Text',
          },
        ]}
      ></IonToast>
      <IonToast
        trigger="open-stacked-toast"
        message="This is a toast with a long message and a button that appears on the next line."
        duration={3000}
        buttons={[
          {
            text: 'Action With Long Text',
          },
        ]}
        layout="stacked"
      ></IonToast>
    </>
  );
}
export default Example;
```
