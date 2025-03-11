```html
<form id="my-form">
  <ion-checkbox helper-text="Agree to the terms before continuing" error-text="You must agree to the terms to continue">
    I agree to the terms and conditions
  </ion-checkbox>

  <br />

  <ion-button type="submit" size="small">Submit</ion-button>
</form>

<script>
  const form = document.getElementById('my-form');
  const agree = form.querySelector('ion-checkbox');

  form.addEventListener('submit', (event) => submit(event));
  agree.addEventListener('ionChange', (event) => validateCheckbox(event));

  const validateCheckbox = (event) => {
    agree.classList.add('ion-touched');

    if (!event.detail.checked) {
      agree.classList.add('ion-invalid');
      agree.classList.remove('ion-valid');
    } else {
      agree.classList.remove('ion-invalid');
      agree.classList.add('ion-valid');
    }
  };

  const submit = (event) => {
    event.preventDefault();

    validateCheckbox({ detail: { checked: agree.checked } });
  };
</script>
```
