```tsx
import React, { useState } from 'react';
import { IonInputOtp } from '@ionic/react';

function Example() {
  const [inputs, setInputs] = useState([{ value: '12' }, { value: '1234' }]);

  const getValidationState = (value: string) => ({
    class: value.length === 4 ? 'ion-valid' : 'ion-invalid',
    text: value.length === 4 ? 'Valid' : 'Invalid',
  });

  const handleInput = (index: number, value: string) => {
    setInputs((prev) => prev.map((input, i) => (i === index ? { ...input, value } : input)));
  };

  return (
    <>
      <IonInputOtp disabled value="1234">
        Disabled
      </IonInputOtp>
      <IonInputOtp readonly value="1234">
        Readonly
      </IonInputOtp>

      {inputs.map((input, index) => (
        <IonInputOtp
          key={index}
          value={input.value}
          onIonInput={(e) => handleInput(index, e.detail.value!)}
          className={`ion-touched ${index === 1 ? 'has-focus' : ''} ${getValidationState(input.value).class}`}
        >
          <span>{getValidationState(input.value).text}</span>
        </IonInputOtp>
      ))}
    </>
  );
}

export default Example;
```
