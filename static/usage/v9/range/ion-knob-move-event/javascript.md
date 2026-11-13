```html
<ion-range aria-label="Range with knob events" dual-knobs="true"></ion-range>

<script>
  const range = document.querySelector('ion-range');
  range.value = {
    lower: 20,
    upper: 80,
  };

  range.addEventListener('ionKnobMoveStart', ({ detail }) => {
    console.log('ionKnobMoveStart:', detail.knob, detail.position, detail.value);
  });

  range.addEventListener('ionKnobMoveEnd', ({ detail }) => {
    console.log('ionKnobMoveEnd:', detail.knob, detail.position, detail.value);
  });
</script>
```
