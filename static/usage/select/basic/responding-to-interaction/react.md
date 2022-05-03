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
        <IonSelectOption>Apples</IonSelectOption>
        <IonSelectOption>Oranges</IonSelectOption>
        <IonSelectOption>Bananas</IonSelectOption>
      </IonSelect>
      <div id="log" className="ion-padding">
        {logs.map((log) => <p>{log}</p>)}
        <p>Events will log above</p>
      </div>
    </>
  );
}

export default Example;
```
