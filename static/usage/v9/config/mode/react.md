```tsx
import React, { useState, useEffect } from 'react';
import { IonButton } from '@ionic/react';
import { getMode } from '@ionic/core';

function Example() {
  const [mode, setMode] = useState('');

  useEffect(() => {
    const mode = getMode() || 'md';
    setMode(mode);
  }, []);

  const color = mode === 'ios' ? 'secondary' : 'tertiary';
  const fill = mode === 'ios' ? 'outline' : 'solid';

  return (
    <IonButton color={color} fill={fill}>
      Current mode: {mode}
    </IonButton>
  );
}
export default Example;
```
