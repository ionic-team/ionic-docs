```html
<form id="my-form">
  <ion-select
    label="Favorite fruit"
    placeholder="Select fruit"
    helper-text="Select your favorite fruit"
    error-text="This field is required"
  >
    <ion-select-option value="apple">Apple</ion-select-option>
    <ion-select-option value="banana">Banana</ion-select-option>
    <ion-select-option value="orange">Orange</ion-select-option>
  </ion-select>

  <br />

  <ion-button type="submit" size="small">Submit</ion-button>
</form>

<script>
  const form = document.getElementById('my-form');
  const favFruit = form.querySelector('ion-select');

  form.addEventListener('submit', (event) => submit(event));
  favFruit.addEventListener('ionChange', (event) => validateSelect(event));
  favFruit.addEventListener('ionBlur', () => onIonBlur({ detail: { value: favFruit.value } }));

  const validateSelect = (event) => {
    if (!event.detail.value) {
      favFruit.classList.add('ion-invalid');
      favFruit.classList.remove('ion-valid');
    } else {
      favFruit.classList.remove('ion-invalid');
      favFruit.classList.add('ion-valid');
    }
  };

  const markTouched = () => {
    favFruit.classList.add('ion-touched');
  };

  const onIonBlur = (event) => {
    markTouched();
    validateSelect(event);
  };

  const submit = (event) => {
    event.preventDefault();

    markTouched();
    validateSelect({ detail: { value: favFruit.value } });
  };
</script>
```
