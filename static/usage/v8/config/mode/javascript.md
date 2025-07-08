```html
<ion-button id="modeButton">Current mode: <span id="modeValue"></span></ion-button>
<script>
  const modeButton = document.querySelector('#modeButton');
  const modeValue = document.querySelector('#modeValue');
  const mode = window.Ionic.config.get('mode') || document.documentElement.getAttribute('mode') || 'md';

  modeValue.textContent = mode;

  modeButton.setAttribute('color', mode === 'ios' ? 'secondary' : 'tertiary');
  modeButton.setAttribute('fill', mode === 'ios' ? 'outline' : 'solid');
</script>
```
