```css
/**
 * Since we are styling elements inside of ion-input
 * we need to move this CSS to a global stylesheet. Otherwise,
 * Angular components with encapsulation enabled will add
 * scoped style attributes to these selectors.
 */
ion-input.custom.ios .input-bottom .helper-text,
ion-input.custom.ios .input-bottom .counter,
ion-input.custom.md .input-bottom .helper-text,
ion-input.custom.md .input-bottom .counter {
  color: var(--ion-color-primary);
}
```
