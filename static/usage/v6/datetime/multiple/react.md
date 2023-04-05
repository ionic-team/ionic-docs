```tsx
import React, { useRef, useEffect } from 'react';
import { IonDatetime } from '@ionic/react';

function Example() {
  const datetime = useRef<null | HTMLIonDatetimeElement>(null);

  useEffect(() => {
    if(!datetime.current) return;
    datetime.current.value = ['2022-06-03', '2022-06-13', '2022-06-29'];
  }, []);

  return <IonDatetime
    ref={datetime}
    presentation="date"
    multiple={true}
  ></IonDatetime>;
}
export default Example;
```
