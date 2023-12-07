```html
<ion-textarea label="Default counter" label-placement="floating" counter="true" maxlength="20"></ion-textarea>

<ion-textarea
  id="custom-textarea"
  label="Custom Counter Format"
  label-placement="floating"
  counter="true"
  maxlength="20"
></ion-textarea>

<script>
  const customTextarea = document.querySelector('#custom-textarea');
  customTextarea.counterFormatter = (inputLength, maxLength) => `${maxLength - inputLength} characters remaining`;
</script>
```
