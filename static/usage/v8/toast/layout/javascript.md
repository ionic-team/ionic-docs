```html
<ion-button id="open-inline-toast">Open Baseline Layout Toast</ion-button>
<ion-button id="open-stacked-toast">Open Stacked Layout Toast</ion-button>
<ion-toast
  trigger="open-inline-toast"
  duration="3000"
  message="This is a toast with a long message and a button that appears on the same line."
></ion-toast>
<ion-toast
  trigger="open-stacked-toast"
  duration="3000"
  message="This is a toast with a long message and a button that appears on the next line."
  layout="stacked"
></ion-toast>

<script>
  const toasts = document.querySelectorAll('ion-toast');

  toasts.forEach((toast) => {
    toast.buttons = [
      {
        text: 'Action With Long Text',
      },
    ];
  });
</script>
```
