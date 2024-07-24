```tsx
import React from 'react';
import { IonButton, IonToast } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonButton id="open-toast">Open Toast</IonButton>
      <IonToast
        trigger="open-toast"
        duration={3000}
        message="Hello Styled World!"
        className="custom-toast"
        buttons={[
          {
            text: 'Dismiss',
            role: 'cancel',
          },
        ]}
      ></IonToast>
    </>
  );
}
export default Example;
```
