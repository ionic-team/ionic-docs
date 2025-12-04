```tsx
import React from 'react';
import { IonRippleEffect } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <div className="wrapper">
      <b>Click on a shape to see the ripple</b>

      <div className="ion-activatable ripple-parent rectangle">
        <IonRippleEffect></IonRippleEffect>
      </div>

      <div className="ion-activatable ripple-parent rounded-rectangle">
        <IonRippleEffect></IonRippleEffect>
      </div>

      <div className="ion-activatable ripple-parent circle">
        <IonRippleEffect></IonRippleEffect>
      </div>
    </div>
  );
}
export default Example;
```
