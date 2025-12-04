```html
<form id="my-form">
  <ion-radio-group helper-text="Select your favorite fruit" error-text="This field is required">
    <ion-radio value="grapes">Grapes</ion-radio><br />
    <ion-radio value="strawberries">Strawberries</ion-radio><br />
    <ion-radio value="pineapple">Pineapple</ion-radio><br />
    <ion-radio value="cherries">Cherries</ion-radio>
  </ion-radio-group>

  <br />

  <ion-button type="submit" size="small">Submit</ion-button>
</form>

<script>
  const form = document.getElementById('my-form');
  const favFruit = form.querySelector('ion-radio-group');

  form.addEventListener('submit', (event) => submit(event));
  favFruit.addEventListener('ionChange', (event) => validateRadioGroup(event));

  const validateRadioGroup = (event) => {
    favFruit.classList.add('ion-touched');

    if (!event.detail.value) {
      favFruit.classList.add('ion-invalid');
      favFruit.classList.remove('ion-valid');
    } else {
      favFruit.classList.remove('ion-invalid');
      favFruit.classList.add('ion-valid');
    }
  };

  const submit = (event) => {
    event.preventDefault();

    validateRadioGroup({ detail: { value: favFruit.value } });
  };
</script>
```
