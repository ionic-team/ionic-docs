```html
<ion-content>
  <ion-range
    (ionKnobMoveStart)="onIonKnobMoveStart($any($event))"
    (ionKnobMoveEnd)="onIonKnobMoveEnd($any($event))"
  ></ion-range>
  <div>
    <ion-label>ionKnobMoveStart: {{ moveStart }}</ion-label>
  </div>
  <div>
    <ion-label>ionKnobMoveEnd: {{ moveEnd }}</ion-label>
  </div>
</ion-content>
```
