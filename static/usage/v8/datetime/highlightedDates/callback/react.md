```tsx
import React from 'react';
import { IonDatetime } from '@ionic/react';
function Example() {
  return (
    <IonDatetime
      presentation="date"
      highlightedDates={(isoString) => {
        const date = new Date(isoString);
        const utcDay = date.getUTCDate();

        if (utcDay % 5 === 0) {
          return {
            textColor: '#800080',
            backgroundColor: '#ffc0cb',
          };
        }

        if (utcDay % 3 === 0) {
          return {
            textColor: 'var(--ion-color-secondary-contrast)',
            backgroundColor: 'var(--ion-color-secondary)',
          };
        }

        return undefined;
      }}
    ></IonDatetime>
  );
}
export default Example;
```
