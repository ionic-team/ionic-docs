```tsx
import React from 'react';
import { IonInputOtp } from '@ionic/react';

function Example() {
  return (
    <>
      <IonInputOtp pattern="[1-4]" value="123">
        Numbers 1-4 only
      </IonInputOtp>
      <IonInputOtp type="text" pattern="." value="!@#">
        All characters allowed
      </IonInputOtp>
      <IonInputOtp type="text" pattern="[A-Z]" autocapitalize="on" value="ABC">
        Capital Latin letters only
      </IonInputOtp>
      <IonInputOtp type="text" pattern="[\p{Script=Greek}]" value="αβγ">
        Greek characters only
      </IonInputOtp>
      <IonInputOtp type="text" pattern="[\p{Script=Arabic}]" value="ابت">
        Arabic characters only
      </IonInputOtp>
      <IonInputOtp type="text" pattern="[\p{Script=Han}]" value="甲乙丙">
        Chinese characters only
      </IonInputOtp>
    </>
  );
}
export default Example;
```
