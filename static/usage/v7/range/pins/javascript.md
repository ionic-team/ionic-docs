```html
<ion-range pin="true"></ion-range>

<script>
  const range = document.querySelector('ion-range');
  range.pinFormatter = (value) => {
    return `${value}%`;
  };
</script>
```
