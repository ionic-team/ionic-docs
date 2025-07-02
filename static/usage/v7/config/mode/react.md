```tsx
import React, { useState, useEffect } from 'react';
import { IonButton } from '@ionic/react';
import { getMode } from '@ionic/core';

function Example() {
  const [modeValue, setModeValue] = useState('');

  useEffect(() => {
    setModeValue(getMode());
  }, []);

  const showMode = () => {
    setModeValue(getMode());
  };

  const color = modeValue === 'ios' ? 'secondary' : 'tertiary';
  const fill = modeValue === 'ios' ? 'outline' : 'solid';

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <IonButton color={color} fill={fill} onClick={showMode}>
        {modeValue}
      </IonButton>
      <div className="mode-value" style={{ marginTop: 16, fontWeight: 'bold' }}>
        {modeValue && `Current mode: ${modeValue}`}
      </div>
    </div>
  );
}
export default Example;
```