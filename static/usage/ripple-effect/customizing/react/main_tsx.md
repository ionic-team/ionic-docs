```tsx
import React from 'react';
import { IonRippleEffect } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>Click on a shape to see the ripple</b>

      <div className="ion-activatable ripple-parent custom-parent">
        Custom Parent Color
        <IonRippleEffect></IonRippleEffect>
      </div>

      <div className="ion-activatable ripple-parent">
        Custom Ripple Color
        <IonRippleEffect className="custom-ripple"></IonRippleEffect>
      </div>
    </>
  );
}
export default Example;
```
