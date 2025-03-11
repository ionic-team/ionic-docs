```html
<ion-toggle
  helper-text="Enable to connect to available networks"
  error-text="Must be enabled to access the internet"
  justify="space-between"
  checked
>
  Wi-Fi
</ion-toggle>

<script>
  const wifi = document.querySelector('ion-toggle');

  wifi.addEventListener('ionChange', (event) => validateToggle(event));

  const validateToggle = (event) => {
    wifi.classList.add('ion-touched');

    if (!event.detail.checked) {
      wifi.classList.add('ion-invalid');
      wifi.classList.remove('ion-valid');
    } else {
      wifi.classList.remove('ion-invalid');
      wifi.classList.add('ion-valid');
    }
  };
</script>
```
