```html
<ion-range aria-label="Range with ionChange"></ion-range>

<script>
  const range = document.querySelector('ion-range');

  range.addEventListener('ionChange', ({ detail }) => {
    console.log('ionChange emitted value: ' + detail.value);
  });
</script>
```
