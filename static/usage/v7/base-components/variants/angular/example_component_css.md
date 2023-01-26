```css
ion-button {
  --base-color: var(--ion-color-base, var(--ion-color-primary));
  --base-color-rgb: var(--ion-color-base-rgb, var(--ion-color-primary-rgb));
  --tint-color: var(--ion-color-tint, var(--ion-color-primary-tint));
  --shade-color: var(--ion-color-shade, var(--ion-color-primary-shade));

  --padding-top: 10px;
  --padding-bottom: 10px;
  --padding-start: 20px;
  --padding-end: 20px;

  --border-radius: 12px;
  --box-shadow: 0px 10px 15px -3px rgba(var(--base-color-rgb), 0.5);

  margin: 4px;
  height: 56px;
}

ion-button.button-small {
  --padding-top: 0px;
  --padding-bottom: 0px;
  --padding-start: 10px;
  --padding-end: 10px;

  --border-radius: 6px;

  height: 30px;
  font-size: 12px;
}

ion-button.button-large {
  --padding-top: 0px;
  --padding-bottom: 0px;
  --padding-start: 20px;
  --padding-end: 20px;

  --border-radius: 16px;

  height: 70px;
  font-size: 20px;
}

ion-button.button-solid {
  --background-hover: var(--tint-color);
  --background-activated: var(--shade-color);
  --background-focused: var(--shade-color);
}

ion-button.button-outline {
  --background-hover: var(--base-color);
  --background-hover-opacity: 0.05;

  --background-focused: var(--base-color);
  --background-focused-opacity: 0.1;

  --background-focused: var(--base-color);
  --background-focused-opacity: 0.15;

  --border-width: 2px;
  --border-color: var(--base-color);
  --border-style: solid;
}

ion-button.button-clear {
  --background-hover: var(--base-color);
  --background-hover-opacity: 0.05;

  --background-focused: var(--base-color);
  --background-focused-opacity: 0.1;

  --background-focused: var(--base-color);
  --background-focused-opacity: 0.15;

  --box-shadow: none;
}

ion-button.button-strong {
  font-weight: 700;
}

ion-button.button-round {
  --border-radius: 9999px;
}
```
