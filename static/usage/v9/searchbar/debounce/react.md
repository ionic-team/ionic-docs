```tsx
import React, { useState } from 'react';
import { IonItem, IonList, IonSearchbar } from '@ionic/react';

function Example() {
  const data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  let [results, setResults] = useState([...data]);

  const handleInput = (event: Event) => {
    let query = '';
    const target = event.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    setResults(data.filter((d) => d.toLowerCase().indexOf(query) > -1));
  };

  return (
    <>
      <IonSearchbar debounce={1000} onIonInput={(event) => handleInput(event)}></IonSearchbar>

      <IonList>
        {results.map((result) => (
          <IonItem>{result}</IonItem>
        ))}
      </IonList>
    </>
  );
}
export default Example;
```
