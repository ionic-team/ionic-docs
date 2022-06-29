```css
ion-alert.custom-alert {
  --backdrop-opacity: 0.7;
}

.custom-alert .alert-button-group {
  padding: 8px;
}

button.alert-button.alert-button-confirm {
  background-color: var(--ion-color-success);
  color: var(--ion-color-success-contrast);
}

.md button.alert-button.alert-button-confirm {
  border-radius: 5px;
}

.ios button.alert-button.alert-button-confirm {
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
```