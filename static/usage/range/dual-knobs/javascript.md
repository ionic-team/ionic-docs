```html
<ion-content>
  <ion-range dual-knobs="true"></ion-range>
</ion-content>

<script>
  const range = document.querySelector('ion-range');
  range.value = {
    lower: 20,
    upper: 80,
  };
</script>
```
