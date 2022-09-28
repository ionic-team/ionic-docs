```tsx
import React from 'react';
import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonCard>
      <IonItem lines="none">
        <IonAvatar slot="start">
          <img src="./avatar.svg" />
        </IonAvatar>
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>
      </IonItem>

      <IonCardContent>
        Here's a small text description for the card content. Nothing more, nothing less.
      </IonCardContent>
    </IonCard>
  );
}
export default Example;
```
