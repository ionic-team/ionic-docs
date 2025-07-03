```html
<div class="container">
  <ion-button id="showModeBtn" color="primary" fill="solid">Show Current Mode</ion-button>
  <div class="mode-value" id="modeValue"></div>
</div>
<script>
  function getMode() {
    if (window.Ionic && window.Ionic.config && window.Ionic.config.get) {
      return window.Ionic.config.get('mode');
    } else {
      return document.documentElement.getAttribute('mode') || 'md';
    }
  }

  function updateButton(mode) {
    const btn = document.getElementById('showModeBtn');
    btn.innerText = mode;
    btn.color = mode === 'ios' ? 'secondary' : 'tertiary';
    btn.fill = mode === 'ios' ? 'outline' : 'solid';
  }

  document.getElementById('showModeBtn').addEventListener('click', () => {
    const mode = getMode();
    document.getElementById('modeValue').textContent = `Current mode: ${mode}`;
    updateButton(mode);
  });

  // Optionally, set initial state on load
  document.addEventListener('DOMContentLoaded', () => {
    const mode = getMode();
    updateButton(mode);
  });
</script>
<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mode-value {
    margin-top: 16px;
    font-weight: bold;
  }
</style>
```
