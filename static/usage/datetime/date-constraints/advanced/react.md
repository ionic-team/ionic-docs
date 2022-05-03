```tsx
import React from 'react';
import { IonDatetime } from '@ionic/react';
function Example() {
<<<<<<< HEAD
  const isWeekday = (dateString: string) => {
=======
  const isWeekday = (dateString) => {
>>>>>>> origin/FW-1295
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
