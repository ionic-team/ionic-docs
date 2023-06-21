```html
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="https://cdn.skypack.dev/@ionic/core@7/css/core.css" />
    <link rel="stylesheet" type="text/css" href="https://cdn.skypack.dev/@ionic/core@7/css/ionic.bundle.css" />
  </head>

  <body>
    <ion-app>
      <ion-content class="ion-padding">
        <ion-list>
          <ion-item>
            <ion-input id="card" label="Card number" placeholder="0000 0000 0000 0000"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input id="phone" label="US phone number" placeholder="+1 (xxx) xxx-xxxx"></ion-input>
          </ion-item>
        </ion-list>
      </ion-content>

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

        window.addEventListener('appload', () => {
          initCardMask();
          initPhoneMask();
        });
      </script>
    </ion-app>
  </body>
</html>
```
