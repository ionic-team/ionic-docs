```html
<ion-textarea
  fill="solid"
  label="Email"
  label-placement="floating"
  helper-text="Enter a valid email"
  error-text="Invalid email"
></ion-textarea>

<script>
  const textarea = textarea.querySelector('ion-textarea');

  textarea.addEventListener('ionInput', (ev) => validate(ev));
  textarea.addEventListener('ionBlur', () => markTouched());

  const validateEmail = (email) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validate = (ev) => {
    const value = ev.target.value;

    textarea.classList.remove('ion-valid');
    textarea.classList.remove('ion-invalid');

    if (value === '') return;

    validateEmail(value) ? textarea.classList.add('ion-valid') : input.classList.add('ion-invalid');
  };

  const markTouched = () => {
    textarea.classList.add('ion-touched');
  };
</script>
```
