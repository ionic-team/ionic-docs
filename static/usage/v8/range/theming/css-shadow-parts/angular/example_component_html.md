```html
<h2>Single Knob</h2>
<ion-range
  id="range-single"
  aria-label="Custom range"
  [min]="0"
  [max]="10"
  [value]="5"
  [pin]="true"
  [ticks]="true"
  [snaps]="true"
></ion-range>

<h2>Dual Knobs (A/B)</h2>
<ion-range
  id="range-a-b"
  aria-label="Custom dual knob range with A/B styling"
  [min]="0"
  [max]="10"
  [value]="{lower: 3, upper: 7}"
  [dualKnobs]="true"
  [pin]="true"
></ion-range>

<h2>Dual Knobs (Lower/Upper)</h2>
<ion-range
  id="range-lower-upper"
  aria-label="Custom dual knob range with lower/upper styling"
  [min]="0"
  [max]="10"
  [value]="{lower: 3, upper: 7}"
  [dualKnobs]="true"
  [pin]="true"
></ion-range>
```
