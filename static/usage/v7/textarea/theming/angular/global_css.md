```css
/**
 * Since we are styling elements inside of ion-textarea
 * we need to move this CSS to a global stylesheet. Otherwise,
 * Angular components with encapsulation enabled will add
 * scoped style attributes to these selectors.
 */
ion-textarea.custom.ios .textarea-bottom .helper-text,
ion-textarea.custom.ios .textarea-bottom .counter,
ion-textarea.custom.md .textarea-bottom .helper-text,
ion-textarea.custom.md .textarea-bottom .counter {
  color: var(--ion-color-primary);
}
```
