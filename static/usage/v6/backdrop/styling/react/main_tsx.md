```tsx
import React from 'react';
import { IonBackdrop, IonHeader, IonToolbar, IonTitle, IonContent, IonCheckbox, IonButton } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonBackdrop visible={true}></IonBackdrop>
      <div className="ion-page">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Backdrop</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, cum aspernatur cupiditate nesciunt totam
            perspiciatis delectus soluta laboriosam, ullam impedit porro eaque laborum optio natus sed nostrum,
            provident expedita vero!
          </p>
        </IonContent>
      </div>
      <div id="box">
        <IonCheckbox color="light"></IonCheckbox>
        <IonButton class="ion-margin-start" color="light">
          Clickable
        </IonButton>
      </div>
    </>
  );
}
export default Example;
```
