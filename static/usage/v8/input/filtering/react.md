```tsx
import React, { useState, useRef } from 'react';
import { IonInput, IonItem, IonList } from '@ionic/react';

function Example() {
  const [inputModel, setInputModel] = useState('');
  const ionInputEl = useRef<HTMLIonInputElement>(null);

  const onInput = (event: Event) => {
    const value = (event.target as HTMLIonInputElement).value as string;

    // Removes non alphanumeric characters
    const filteredValue = value.replace(/[^a-zA-Z0-9]+/g, '');

    /**
     * Update both the state variable and
     * the component to keep them in sync.
     */
    setInputModel(filteredValue);

    const inputCmp = ionInputEl.current;
    if (inputCmp !== null) {
      inputCmp.value = filteredValue;
    }
  };

  return (
    <IonList>
      <IonItem>
        <IonInput label="Alphanumeric Characters" value={inputModel} onIonInput={onInput} ref={ionInputEl}></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
