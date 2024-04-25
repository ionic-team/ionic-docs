```html
<ion-textarea
  aria-label="Custom textarea"
  placeholder="Type something here"
  class="custom"
  helper-text="Helper text"
  counter="true"
  maxlength="100"
></ion-textarea>

<style>
  ion-textarea.custom {
    --background: #373737;
    --color: #fff;
    --padding-end: 10px;
    --padding-start: 10px;
    --placeholder-color: #ddd;
    --placeholder-opacity: 0.8;
  }

  ion-textarea.custom.ios .textarea-bottom .helper-text,
  ion-textarea.custom.ios .textarea-bottom .counter,
  ion-textarea.custom.md .textarea-bottom .helper-text,
  ion-textarea.custom.md .textarea-bottom .counter {
    color: var(--ion-color-primary);
  }
</style>
```
