```tsx
import React, { useState } from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';

function Example() {
  const [logs, setLogs] = useState<string[]>([]);

  const pushLog = (msg: string) => {
    setLogs([msg, ...logs]);
  };

  return (
    <>
      <IonList>
        <IonItem>
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
        </IonItem>
      </IonList>
      <div className="ion-padding">
        {logs.map((log) => (
          <p>{log}</p>
        ))}
      </div>
    </>
  );
}

export default Example;
```
