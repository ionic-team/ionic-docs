```tsx
import React from 'react';
import { IonButton, IonContent, IonHeader, IonMenu, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { menuController } from '@ionic/core/components';

function Example() {
  async function openFirstMenu() {
    // Open the menu by menu-id
    await menuController.enable(true, 'first-menu');
    await menuController.open('first-menu');
  }

  async function openSecondMenu() {
    // Open the menu by menu-id
    await menuController.enable(true, 'second-menu');
    await menuController.open('second-menu');
  }

  async function openEndMenu() {
    // Open the menu by side
    await menuController.open('end');
  }

  return (
    <>
      <IonMenu menuId="first-menu" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>First Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the first menu content.</IonContent>
      </IonMenu>

      <IonMenu menuId="second-menu" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Second Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the second menu content.</IonContent>
      </IonMenu>

      <IonMenu side="end" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>End Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the end menu content.</IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>Tap a button below to open a specific menu.</p>

          <IonButton expand="block" onClick={openFirstMenu}>Open First Menu</IonButton>
          <IonButton expand="block" onClick={openSecondMenu}>Open Second Menu</IonButton>
          <IonButton expand="block" onClick={openEndMenu}>Open End Menu</IonButton>
        </IonContent>
      </IonPage>
    </>
  );
}
export default Example;
```
