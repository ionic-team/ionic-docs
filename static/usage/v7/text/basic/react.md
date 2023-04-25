```tsx
import React from 'react';
import { IonText, IonIcon } from '@ionic/react';
import { warning } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonText color="primary">
        <h1>H1: The quick brown fox jumps over the lazy dog</h1>
      </IonText>

      <IonText color="secondary">
        <h2>H2: The quick brown fox jumps over the lazy dog</h2>
      </IonText>

      <IonText color="tertiary">
        <h3>H3: The quick brown fox jumps over the lazy dog</h3>
      </IonText>

      <p>
        <IonText color="warning"><IonIcon icon={warning}></IonIcon></IonText>
        I saw a werewolf with a Chinese menu in his hand.
        Walking through the <IonText color="success"><sub>streets</sub></IonText> of Soho in the rain.
        He <IonText color="medium"><i>was</i></IonText> looking for a place called Lee Ho Fook's.
        Gonna get a <IonText color="danger">big dish of beef chow mein.</IonText>
      </p>
    </>
  );
}
export default Example;
```
