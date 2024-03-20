```tsx
import React, { useEffect, useState } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRange,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import type { ToggleCustomEvent } from '@ionic/react';
import { personCircle, personCircleOutline, sunny, sunnyOutline } from 'ionicons/icons';

import './main.css';

function Example() {
  const [paletteToggle, setPaletteToggle] = useState(false);

  // Listen for the toggle check/uncheck to toggle the dark palette
  const toggleChange = (ev: ToggleCustomEvent) => {
    toggleDarkPalette(ev.detail.checked);
  };

  // Add or remove the "ion-palette-dark" class on the html element
  const toggleDarkPalette = (shouldAdd: boolean) => {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  };

  // Check/uncheck the toggle and update the palette based on isDark
  const initializeDarkPalette = (isDark: boolean) => {
    setPaletteToggle(isDark);
    toggleDarkPalette(isDark);
  };

  useEffect(() => {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize the dark palette based on the initial
    // value of the prefers-color-scheme media query
    initializeDarkPalette(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) => initializeDarkPalette(mediaQuery.matches));
  }, []);

  return (
    <>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton default-href="#"></IonBackButton>
          </IonButtons>
          <IonTitle>Display</IonTitle>
          <IonButtons slot="end">
            <IonButton color="dark">
              <IonIcon slot="icon-only" ios={personCircleOutline} md={personCircle}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonListHeader>Appearance</IonListHeader>
        <IonList inset={true}>
          <IonItem>
            <IonToggle checked={paletteToggle} onIonChange={toggleChange} justify="space-between">
              Dark Mode
            </IonToggle>
          </IonItem>
        </IonList>

        <IonList inset={true}>
          <IonItem button={true}>Text Size</IonItem>
          <IonItem>
            <IonToggle justify="space-between">Bold Text</IonToggle>
          </IonItem>
        </IonList>

        <IonListHeader>Brightness</IonListHeader>
        <IonList inset={true}>
          <IonItem>
            <IonRange value={40}>
              <IonIcon icon={sunnyOutline} slot="start"></IonIcon>
              <IonIcon icon={sunny} slot="end"></IonIcon>
            </IonRange>
          </IonItem>
          <IonItem>
            <IonToggle justify="space-between" checked>
              True Tone
            </IonToggle>
          </IonItem>
        </IonList>

        <IonList inset={true}>
          <IonItem button={true}>
            <IonLabel>Night Shift</IonLabel>
            <IonText slot="end" color="medium">
              9:00 PM to 8:00 AM
            </IonText>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
}
export default Example;
```
