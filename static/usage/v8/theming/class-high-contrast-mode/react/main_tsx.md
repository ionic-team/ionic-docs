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
  const [darkPaletteToggle, setDarkPaletteToggle] = useState(false);
  const [highContrastPaletteToggle, setHighContrastPaletteToggle] = useState(false);

  // Listen for the toggle check/uncheck to toggle the palettes
  const darkPaletteToggleChange = (ev: ToggleCustomEvent) => {
    toggleDarkPalette(ev.detail.checked);
  };

  const highContrastPaletteToggleChange = (ev: ToggleCustomEvent) => {
    toggleHighContrastPalette(ev.detail.checked);
  };

  // Add or remove the "ion-palette-dark" class on the html element
  const toggleDarkPalette = (shouldAdd: boolean) => {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  };

  // Add or remove the "ion-palette-high-contrast" class on the html element
  const toggleHighContrastPalette = (shouldAdd: boolean) => {
    document.documentElement.classList.toggle('ion-palette-high-contrast', shouldAdd);
  };

  // Check/uncheck the toggle and update the palette
  const initializeDarkPalette = (isDark: boolean) => {
    setDarkPaletteToggle(isDark);
    toggleDarkPalette(isDark);
  };

  const initializeHighContrastPalette = (isHighContrast: boolean) => {
    setHighContrastPaletteToggle(isHighContrast);
    toggleHighContrastPalette(isHighContrast);
  };

  useEffect(() => {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersHighContrast = window.matchMedia('(prefers-contrast: more)');

    // Initialize the dark palette based on the initial
    // value of the media queries
    initializeDarkPalette(prefersDark.matches);
    initializeHighContrastPalette(prefersHighContrast.matches);

    // Listen for changes to the media queries
    prefersDark.addEventListener('change', (mediaQuery) => initializeDarkPalette(mediaQuery.matches));
    prefersHighContrast.addEventListener('change', (mediaQuery) => initializeHighContrastPalette(mediaQuery.matches));
  }, []);

  return (
    <>
      <IonHeader>
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

      <IonContent color="light">
        <IonListHeader>Appearance</IonListHeader>
        <IonList inset={true}>
          <IonItem>
            <IonToggle checked={darkPaletteToggle} onIonChange={darkPaletteToggleChange} justify="space-between">
              Dark Mode
            </IonToggle>
          </IonItem>
          <IonItem>
            <IonToggle
              checked={highContrastPaletteToggle}
              onIonChange={highContrastPaletteToggleChange}
              justify="space-between"
            >
              High Contrast Mode
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
