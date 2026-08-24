```tsx
import React, { useEffect, useState } from 'react';
import { IonDatetime } from '@ionic/react';

import './main.css';

function Example() {
  const [datetime, setDatetime] = useState<string | null>(null);

  useEffect(() => {
    const date = new Date();

    // Set the value of the datetime to 2 days
    // before the current day
    let dayChange = -2;

    // If the day we are going to set the value to
    // is in the previous month then set the day 2 days
    // later instead so it remains in the same month
    if (date.getDate() + dayChange <= 0) {
      dayChange = -dayChange;
    }

    // Set the value of the datetime to the day
    // calculated above
    date.setDate(date.getDate() + dayChange);
    setDatetime(date.toISOString());
  }, []);

  return <IonDatetime presentation="date" value={datetime}></IonDatetime>;
}
export default Example;
```
