```tsx
import React from 'react';
import { IonTextarea } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonTextarea
      aria-label="Custom textarea"
      placeholder="Type something here"
      class="custom"
      helperText="Helper text"
      counter={true}
      maxlength={100}
    ></IonTextarea>
  );
}
export default Example;
```
