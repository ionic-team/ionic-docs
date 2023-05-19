```html
<ion-list>
  <ion-item>
    <ion-input id="card" label="Card number" placeholder="0000 0000 0000 0000"></ion-input>
  </ion-item>
  <ion-item>
    <ion-input id="phone" label="US Phone number" placeholder="+1 (xxx) xxx-xxxx"></ion-input>
  </ion-item>
</ion-list>

<script>
  async function initPhoneMask() {
    const ionInput = document.querySelector('#phone');
    const nativeEl = await ionInput.getInputElement();

    new window.Maskito(nativeEl, {
      mask: ['+', '1', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    });
  }

  async function initCardMask() {
    const ionInput = document.querySelector('#card');
    const nativeEl = await ionInput.getInputElement();

    new window.Maskito(nativeEl, {
      mask: [
        ...Array(4).fill(/\d/),
        ' ',
        ...Array(4).fill(/\d/),
        ' ',
        ...Array(4).fill(/\d/),
        ' ',
        ...Array(4).fill(/\d/),
        ' ',
        ...Array(4).fill(/\d/),
      ],
    });
  }

  setTimeout(() => {
    initCardMask();
    initPhoneMask();
  }, 300);
</script>
```
