```html
<ion-range aria-label="Range with pin" pin="true"></ion-range>

<script>
  const range = document.querySelector('ion-range');
  range.pinFormatter = (value) => {
    return `${value}%`;
  };
</script>
```
