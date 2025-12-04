```tsx
import React from 'react';
import { IonRippleEffect } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <div className="wrapper">
      <b>Click on a shape to see the ripple</b>

      <div className="ion-activatable ripple-parent custom-parent">
        Custom Parent Color
        <IonRippleEffect></IonRippleEffect>
      </div>

      <div className="ion-activatable ripple-parent">
        Custom Ripple Color
        <IonRippleEffect className="custom-ripple"></IonRippleEffect>
      </div>
    </div>
  );
}
export default Example;
```
