```html
<ion-input
  type="email"
  fill="solid"
  label="Email"
  label-placement="floating"
  helper-text="Enter a valid email"
  error-text="Invalid email"
></ion-input>

<script>
  const input = input.querySelector('ion-input');

  input.addEventListener('ionInput', (ev) => validate(ev));
  input.addEventListener('ionBlur', () => markTouched());

  const validateEmail = (email) => {
    return email.match(/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
  };

  const validate = (ev) => {
    const value = ev.target.value;

    input.classList.remove('ion-valid');
    input.classList.remove('ion-invalid');

    if (value === "") return;

    validateEmail(value) ? input.classList.add('ion-valid') : input.classList.add('ion-invalid');
  }

  const markTouched = () => {
    input.classList.add('ion-touched');
  }
</script>
```
