```html
<ion-range
  aria-label="Range with knob events"
  [dualKnobs]="true"
  [value]="{ lower: 20, upper: 80 }"
  (ionKnobMoveStart)="onIonKnobMoveStart($event)"
  (ionKnobMoveEnd)="onIonKnobMoveEnd($event)"
></ion-range>
```
