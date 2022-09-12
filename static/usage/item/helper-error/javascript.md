```html
<ion-item fill="solid">
  <ion-label position="floating">Email</ion-label>
  <ion-input type="email"></ion-input>
  <ion-note slot="helper">Enter a valid email</ion-note>
  <ion-note slot="error">Invalid email</ion-note>
</ion-item>

<script>
  const item = document.querySelector('ion-item');
  const input = item.querySelector('ion-input');

  input.addEventListener('ionInput', (ev) => validate(ev));
  input.addEventListener('ionBlur', () => markTouched());

  const validateEmail = (email) => {
    return email.match(/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
  };

  const validate = (ev) => {
    const value = ev.target.value;

    item.classList.remove('ion-valid');
    item.classList.remove('ion-invalid');

    if (value === "") return;

    validateEmail(value) ? item.classList.add('ion-valid') : item.classList.add('ion-invalid');
  }

  const markTouched = () => {
    item.classList.add('ion-touched');
  }
</script>
```
