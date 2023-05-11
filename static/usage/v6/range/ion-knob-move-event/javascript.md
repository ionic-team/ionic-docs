```html
<ion-range></ion-range>
<div>
  <ion-label>ionKnobMoveStart: <span id="moveStart"></span></ion-label>
</div>
<div>
  <ion-label>ionKnobMoveEnd: <span id="moveEnd"></span></ion-label>
</div>

<script>
  const range = document.querySelector('ion-range');
  const moveStart = document.querySelector('#moveStart');
  const moveEnd = document.querySelector('#moveEnd');

  range.addEventListener('ionKnobMoveStart', ({ detail }) => {
    moveStart.innerHTML = detail.value;
  });

  range.addEventListener('ionKnobMoveEnd', ({ detail }) => {
    moveEnd.innerHTML = detail.value;
  });
</script>
```
