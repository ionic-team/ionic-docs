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
  const [darkThemeToggle, setDarkThemeToggle] = useState(false);
  const [highContrastThemeToggle, setHighContrastThemeToggle] = useState(false);

  // Listen for the toggle check/uncheck to toggle the themes
  const darkThemeToggleChange = (ev: ToggleCustomEvent) => {
    toggleDarkTheme(ev.detail.checked);
  };

  const highContrastThemeToggleChange = (ev: ToggleCustomEvent) => {
    toggleHighContrastTheme(ev.detail.checked);
  };

  // Add or remove the "ion-theme-dark" class on the html element
  const toggleDarkTheme = (shouldAdd: boolean) => {
    document.documentElement.classList.toggle('ion-theme-dark', shouldAdd);
  };

  // Add or remove the "ion-theme-high-contrast" class on the html element
  const toggleHighContrastTheme = (shouldAdd: boolean) => {
    document.documentElement.classList.toggle('ion-theme-high-contrast', shouldAdd);
  };

  // Check/uncheck the toggle and update the theme
  const initializeDarkTheme = (isDark: boolean) => {
    setDarkThemeToggle(isDark);
    toggleDarkTheme(isDark);
  };

  const initializeHighContrastTheme = (isHighContrast: boolean) => {
    setHighContrastThemeToggle(isHighContrast);
    toggleHighContrastTheme(isHighContrast);
  };

  useEffect(() => {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersHighContrast = window.matchMedia('(prefers-contrast: more)');

    // Initialize the dark theme based on the initial
    // value of the media queries
    initializeDarkTheme(prefersDark.matches);
    initializeHighContrastTheme(prefersHighContrast.matches);

    // Listen for changes to the media queries
    prefersDark.addEventListener('change', (mediaQuery) => initializeDarkTheme(mediaQuery.matches));
    prefersHighContrast.addEventListener('change', (mediaQuery) => initializeHighContrastTheme(mediaQuery.matches));
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

      <IonContent color="light">
        <IonListHeader>Appearance</IonListHeader>
        <IonList inset={true}>
          <IonItem>
            <IonToggle checked={darkThemeToggle} onIonChange={darkThemeToggleChange} justify="space-between">
              Dark Mode
            </IonToggle>
          </IonItem>
          <IonItem>
            <IonToggle
              checked={highContrastThemeToggle}
              onIonChange={highContrastThemeToggleChange}
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
