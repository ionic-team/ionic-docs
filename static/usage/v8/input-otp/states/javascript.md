```html
<ion-input-otp disabled value="1234"> Disabled </ion-input-otp>
<ion-input-otp readonly value="1234"> Readonly </ion-input-otp>
<ion-input-otp value="12"></ion-input-otp>
<ion-input-otp value="1234" class="has-focus"></ion-input-otp>

<script>
  customElements.whenDefined('ion-input-otp').then(() => {
    const otpInputs = document.querySelectorAll('ion-input-otp:not([disabled]):not([readonly])');

    otpInputs.forEach((input) => {
      // Mark as touched on initialization
      input.classList.add('ion-touched');

      // Validate on initialization
      validateOtp(input);

      // Add input event listener for real-time validation
      input.addEventListener('ionInput', (event) => validateOtp(event.target));
    });
  });

  function validateOtp(input) {
    const value = input.value;

    // Remove existing validation classes
    input.classList.remove('ion-valid');
    input.classList.remove('ion-invalid');

    // Input is valid if value is exactly 4 digits
    if (value && value.toString().length === 4) {
      input.classList.add('ion-valid');
      input.textContent = 'Valid';
    } else {
      input.classList.add('ion-invalid');
      input.textContent = 'Invalid';
    }
  }
</script>
```
