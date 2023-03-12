```tsx
import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>Columns aligned at the top</b>
      <IonGrid>
        <IonRow class="ion-align-items-start">
          <IonCol>
            1
          </IonCol>
          <IonCol>
            2
          </IonCol>
          <IonCol>
            3
          </IonCol>
          <IonCol>
            4 <br />
            # <br />
            # <br />
            # <br />
          </IonCol>
        </IonRow>
      </IonGrid>

      <b>Columns aligned at the center</b>
      <IonGrid>
        <IonRow class="ion-align-items-center">
          <IonCol>
            1
          </IonCol>
          <IonCol>
            2
          </IonCol>
          <IonCol>
            3
          </IonCol>
          <IonCol>
            4 <br />
            # <br />
            # <br />
            # <br />
          </IonCol>
        </IonRow>
      </IonGrid>

      <b>Columns aligned at the bottom</b>
      <IonGrid>
        <IonRow class="ion-align-items-end">
          <IonCol>
            1
          </IonCol>
          <IonCol>
            2
          </IonCol>
          <IonCol>
            3
          </IonCol>
          <IonCol>
            4 <br />
            # <br />
            # <br />
            # <br />
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```
