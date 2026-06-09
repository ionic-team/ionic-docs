```css
/* -----------------------------------------------------*/
/* These styles are for demonstration purposes only.    */
/* They are not required for the rich options to work.  */
/* -----------------------------------------------------*/

/**
* All Interfaces
* ------------------------------------------------
* Override the flex styles so that the title and
* subtitle stack vertically.
*/
.select-option-content div.alert-radio-label-text,
.select-option-content span.action-sheet-button-label-text,
.select-option-content div.select-option-label-text {
  flex-direction: column;
  align-items: start;
  gap: 5px;
}

/* Action Sheet Interface */
ion-action-sheet .select-option-description {
  text-align: start;
}

/* Alert Interface */
ion-alert.select-alert {
  --min-width: 350px;
}

/* Modal, Popover Interfaces */
ion-popover.select-popover ion-list ion-radio.in-item::part(label),
ion-modal.select-modal ion-list ion-radio.in-item::part(label) {
  margin-top: 10px;
  margin-bottom: 10px;
}

/* Custom Select Option Title */
.select-option-content .option-title {
  font-size: 1rem;
  font-weight: 600;
}

/* Custom Select Option Subtitle */
.select-option-content .option-subtitle {
  font-size: 0.8125rem;
  font-weight: 500;
}
```
