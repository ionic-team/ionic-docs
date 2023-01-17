```tsx
import React from 'react';
import { IonToggle } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonToggle aria-label="Enable Notifications"></IonToggle>
      <IonToggle checked={true} aria-label="Enable Notifications"></IonToggle>
    </>
  );
}
export default Example;
```
