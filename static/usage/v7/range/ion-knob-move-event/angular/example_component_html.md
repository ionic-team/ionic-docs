```html
<ion-range (ionKnobMoveStart)="onIonKnobMoveStart($event)" (ionKnobMoveEnd)="onIonKnobMoveEnd($event)"></ion-range>
<div>
  <ion-label>ionKnobMoveStart: {{ moveStart }}</ion-label>
</div>
<div>
  <ion-label>ionKnobMoveEnd: {{ moveEnd }}</ion-label>
</div>
```
