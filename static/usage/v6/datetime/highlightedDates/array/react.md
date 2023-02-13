```tsx
import React from 'react';
import { IonDatetime } from '@ionic/react';
function Example() {
  return (
    <IonDatetime
      presentation="date"
      value="2023-01-01"
      highlightedDates={[
        {
          date: '2023-01-05',
          color: '#800080',
          backgroundColor: '#ffc0cb',
        },
        {
          date: '2023-01-10',
          color: '#09721b',
          backgroundColor: '#c8e5d0',
        },
        {
          date: '2023-01-20',
          color: '#0000ff',
          backgroundColor: '#add8e6',
        },
        {
          date: '2023-01-23',
          color: '#440ab8',
          backgroundColor: '#d3c8e5'
        }
      ]}
    ></IonDatetime>
  );
}
export default Example;
```
