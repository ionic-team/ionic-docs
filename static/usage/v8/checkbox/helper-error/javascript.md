```html
<form id="my-form">
  <ion-checkbox helper-text="This needs to be checked" error-text="This field is required">
    I agree to the terms and conditions
  </ion-checkbox>

  <br />

  <ion-button type="submit" size="small">Submit</ion-button>
</form>

<script>
  const form = document.getElementById('my-form');
  const checkbox = form.querySelector('ion-checkbox');

  form.addEventListener('submit', (event) => submit(event));
  checkbox.addEventListener('ionChange', (event) => validateCheckbox(event));

  const validateCheckbox = (event) => {
    checkbox.classList.add('ion-touched');

    if (!event.detail.checked) {
      checkbox.classList.add('ion-invalid');
      checkbox.classList.remove('ion-valid');
    } else {
      checkbox.classList.remove('ion-invalid');
      checkbox.classList.add('ion-valid');
    }
  };

  const submit = (event) => {
    event.preventDefault();

    validateCheckbox({ detail: { checked: checkbox.checked } });
  };
</script>
```
