```html
<ion-button id="modeButton"></ion-button>

<script>
  const modeButton = document.querySelector('#modeButton');
  const mode = window.Ionic.config.get('mode') || document.documentElement.getAttribute('mode') || 'md';

  modeButton.innerHTML = `Current mode: ${mode}`;
  modeButton.setAttribute('color', mode === 'ios' ? 'secondary' : 'tertiary');
  modeButton.setAttribute('fill', mode === 'ios' ? 'outline' : 'solid');
</script>
```
