```tsx
import React from 'react';
import { IonDatetime } from '@ionic/react';
function Example() {
  const isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    
    /**
     * Date will be enabled if it is not
     * Sunday or Saturday
     */
    return utcDay !== 0 && utcDay !== 6;
  }

  return (
    <IonDatetime isDateEnabled={isWeekday}></IonDatetime>
  );
}
export default Example;
```
