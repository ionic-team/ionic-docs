```html
<ion-input label="Default counter" label-placement="floating" counter="true" maxlength="20"></ion-input>

<ion-input
  id="custom-input"
  label="Custom Counter Format"
  label-placement="floating"
  counter="true"
  maxlength="20"
></ion-input>

<script>
  const customInput = document.querySelector('#custom-input');
  customInput.counterFormatter = (inputLength, maxLength) => `${maxLength - inputLength} characters remaining`;
</script>
```
