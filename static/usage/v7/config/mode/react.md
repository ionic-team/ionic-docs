```tsx
import React, { useState } from 'react';
import { IonButton } from '@ionic/react';
import { getMode } from '@ionic/core';

function Example() {
  const [modeValue, setModeValue] = useState('');

  const showMode = () => {
    setModeValue(getMode());
  };

  return (
    <>
      <IonButton onClick={showMode}>Show Current Mode</IonButton>
      <div className="mode-value">{modeValue && `Current mode: ${modeValue}`}</div>
    </>
  );
}
export default Example;
```
