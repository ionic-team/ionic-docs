```tsx
import React from 'react';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';

function Example() {
  return (
    <>
      <IonDatetimeButton datetime="datetime"></IonDatetimeButton>

      <IonModal keepContentsMounted={true}>
        <IonDatetime
          id="datetime"
          presentation="date-time"
          value="2023-11-02T01:22:00"
          formatOptions={{
            date: {
              weekday: 'short',
              month: 'long',
              day: '2-digit',
            },
            time: {
              hour: '2-digit',
              minute: '2-digit',
            },
          }}
        ></IonDatetime>
      </IonModal>
    </>
  );
}
export default Example;
```
