```html
<ion-button id="buttonToFocus" fill="outline">Button</ion-button>

<ion-radio-group value="a">
  <ion-radio id="radioToFocus" value="a">Radio</ion-radio>
</ion-radio-group>

<br />

<ion-button onClick="focusElement('#buttonToFocus')">Focus Button</ion-button>
<ion-button onClick="focusElement('#radioToFocus')">Focus Radio</ion-button>

<script>
  function focusElement(id) {
    const el = document.querySelector(id);

    const app = el.closest('ion-app');
    if (app) {
      app.setFocus([el]);
    }
  }
</script>
```
