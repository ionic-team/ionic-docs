```html
<button id="showModeBtn">Show Current Mode</button>
<div id="modeValue"></div>
<script>
  document.getElementById('showModeBtn').addEventListener('click', () => {
    let mode;
    if (window.Ionic && window.Ionic.config && window.Ionic.config.get) {
      mode = window.Ionic.config.get('mode');
    } else {
      mode = document.documentElement.getAttribute('mode') || 'md';
    }
    document.getElementById('modeValue').textContent = `Current mode: ${mode}`;
  });
</script>
```
