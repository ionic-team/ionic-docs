```tsx
import React from 'react';
import { IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItemGroup>
        <IonItemDivider>
          <IonLabel>
            Fruits
          </IonLabel>
        </IonItemDivider>

        <IonItemSliding>
          <IonItem>
            <IonLabel>
              Grapes
            </IonLabel>
          </IonItem>
          <IonItemOptions>
            <IonItemOption>
              Favorite
            </IonItemOption>
          </IonItemOptions>
        </IonItemSliding>

        <IonItemSliding>
          <IonItem>
            <IonLabel>
              Apples
            </IonLabel>
          </IonItem>
          <IonItemOptions>
            <IonItemOption>
              Favorite
            </IonItemOption>
          </IonItemOptions>
        </IonItemSliding>

        <IonItemSliding>
          <IonItem lines="none">
            <IonLabel>
              Bananas
            </IonLabel>
          </IonItem>
          <IonItemOptions>
            <IonItemOption>
              Favorite
            </IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      </IonItemGroup>

      <IonItemGroup>
        <IonItemDivider>
          <IonLabel>
            Vegetables
          </IonLabel>
        </IonItemDivider>

        <IonItemSliding>
          <IonItem>
            <IonLabel>
              Carrots
            </IonLabel>
          </IonItem>
          <IonItemOptions>
            <IonItemOption>
              Favorite
            </IonItemOption>
          </IonItemOptions>
        </IonItemSliding>

        <IonItemSliding>
          <IonItem>
            <IonLabel>
              Broccoli
            </IonLabel>
          </IonItem>
          <IonItemOptions>
            <IonItemOption>
              Favorite
            </IonItemOption>
          </IonItemOptions>
        </IonItemSliding>

        <IonItemSliding>
          <IonItem lines="none">
            <IonLabel>
              Celery
            </IonLabel>
          </IonItem>
          <IonItemOptions>
            <IonItemOption>
              Favorite
            </IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      </IonItemGroup>
    </>
  );
}
export default Example;
```
