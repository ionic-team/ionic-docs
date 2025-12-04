```tsx
import React from 'react';
import { IonInput } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonInput
      aria-label="Custom input"
      placeholder="Custom input"
      class="custom"
      helperText="Helper text"
      counter={true}
      maxlength={20}
    ></IonInput>
  );
}
export default Example;
```
