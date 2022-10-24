```tsx
import React from 'react';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonText,
  IonList,
  IonItem,
  IonButtons,
  IonButton,
} from '@ionic/react';

function Example() {
  return (
    <>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Hello world</IonTitle>
          <IonButtons collapse={true} slot="end">
            <IonButton>Click Me</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Hello world</IonTitle>
            <IonButtons collapse={true} slot="end">
              <IonButton>Click Me</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonText className="ion-padding">Scroll the list to see the title & buttons collapse.</IonText>

        <IonList>
          <IonItem>Item 1</IonItem>
          <IonItem>Item 2</IonItem>
          <IonItem>Item 3</IonItem>
          <IonItem>Item 4</IonItem>
          <IonItem>Item 5</IonItem>
          <IonItem>Item 6</IonItem>
          <IonItem>Item 7</IonItem>
          <IonItem>Item 8</IonItem>
          <IonItem>Item 9</IonItem>
          <IonItem>Item 10</IonItem>
          <IonItem>Item 11</IonItem>
          <IonItem>Item 12</IonItem>
          <IonItem>Item 13</IonItem>
          <IonItem>Item 14</IonItem>
          <IonItem>Item 15</IonItem>
          <IonItem>Item 16</IonItem>
          <IonItem>Item 17</IonItem>
          <IonItem>Item 18</IonItem>
          <IonItem>Item 19</IonItem>
          <IonItem>Item 20</IonItem>
        </IonList>
      </IonContent>
    </>
  );
}
export default Example;
```
