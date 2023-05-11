```html
<ion-input
  aria-label="Custom input"
  placeholder="Custom input"
  class="custom"
  helper-text="Helper text"
  counter="true"
  maxlength="20"
></ion-input>

<style>
  ion-input.custom {
    --background: #373737;
    --color: #fff;
    --placeholder-color: #ddd;
    --placeholder-opacity: 0.8;

    --padding-bottom: 10px;
    --padding-end: 10px;
    --padding-start: 10px;
    --padding-top: 10px;
  }

  ion-input.custom .helper-text,
  ion-input.custom .counter {
    color: var(--ion-color-step-700, #373737);
  }
</style>
```
