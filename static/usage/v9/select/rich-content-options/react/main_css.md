```css
/* These styles are for demonstration purposes only. */
/* They are not required for the rich options to work. */

/* Alert Interface */
ion-alert.select-alert {
  --min-width: 350px;
}

/* Action Sheet Interface */
.action-sheet-button-label {
  flex: 1 1 auto;
  text-align: start;
}

/* Modal, Popover Interfaces */
ion-popover.select-popover ion-list ion-radio.in-item::part(label),
ion-modal.select-modal ion-list ion-radio.in-item::part(label) {
  margin-top: 10px;
  margin-bottom: 10px;
}

/* All Interfaces */
.alert-radio-label-text,
.action-sheet-button-label-text,
.select-option-label-text,
.select-option-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

/* Custom Select Option Title */
.select-option-content .option-title {
  font-size: 1rem;
  font-weight: 600;
  line-height: initial;
}

/* Custom Select Option Subtitle */
.select-option-content .option-subtitle {
  display: block;
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: initial;
}
```
