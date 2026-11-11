```html
<ion-input-otp helper-text="Enter the code sent to your email" error-text="Enter all 4 digits"></ion-input-otp>

<script>
  const inputOtp = document.querySelector('ion-input-otp');

  inputOtp.addEventListener('ionInput', (event) => validate(event));
  inputOtp.addEventListener('ionBlur', () => markTouched());

  const validate = (event) => {
    const value = event.detail.value ?? '';

    inputOtp.classList.remove('ion-valid');
    inputOtp.classList.remove('ion-invalid');

    value.length === 4 ? inputOtp.classList.add('ion-valid') : inputOtp.classList.add('ion-invalid');
  };

  const markTouched = () => {
    inputOtp.classList.add('ion-touched');
  };
</script>
```
