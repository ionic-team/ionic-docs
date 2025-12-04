```tsx
import React from 'react';
import { IonDatetime } from '@ionic/react';

function Example() {
  return (
    <IonDatetime
      value="2023-11-02T01:22:00"
      formatOptions={{
        time: { hour: '2-digit', minute: '2-digit' },
        date: { day: '2-digit', month: 'long' },
      }}
    >
      <span slot="title">Select Date</span>
    </IonDatetime>
  );
}
export default Example;
```
