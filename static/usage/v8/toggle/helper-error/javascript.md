```html
<form id="my-form">
  <ion-toggle helper-text="This needs to be enabled" error-text="This field is required"> Wi-Fi </ion-toggle>

  <br />

  <ion-button type="submit" size="small">Submit</ion-button>
</form>

<script>
  const form = document.getElementById('my-form');
  const wifi = form.querySelector('ion-toggle');

  form.addEventListener('submit', (event) => submit(event));
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

  const submit = (event) => {
    event.preventDefault();

    validateToggle({ detail: { checked: wifi.checked } });
  };
</script>
```
