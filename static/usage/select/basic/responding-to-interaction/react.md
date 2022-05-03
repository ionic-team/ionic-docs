```tsx
import React, { useState } from 'react';
import { IonSelect, IonSelectOption } from '@ionic/react';

function Example() {
  const [logs, setLogs] = useState([]);

  const pushLog = (msg) => {
    setLogs([msg, ...logs]);
  };

  return (
    <>
      <IonSelect
        placeholder="Select fruit"
        onIonChange={(e) => pushLog(`ionChange fired with value: ${e.detail.value}`)}
        onIonCancel={() => pushLog('ionCancel fired')}
        onIonDismiss={() => pushLog('ionDismiss fired')}
      >
        <IonSelectOption value="apples">Apples</IonSelectOption>
        <IonSelectOption value="oranges">Oranges</IonSelectOption>
        <IonSelectOption value="bananas">Bananas</IonSelectOption>
      </IonSelect>
      <div className="ion-padding">
        {logs.map((log) => <p>{log}</p>)}
      </div>
    </>
  );
}

export default Example;
```
