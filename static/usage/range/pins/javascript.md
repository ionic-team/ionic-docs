```html
<ion-app>
  <ion-content>
    <ion-range pin="true"></ion-range>
  </ion-content>
</ion-app>

<script>
  const range = document.querySelector('ion-range');
  range.pinFormatter = (value) => {
    return `${value}%`;
  };
</script>
```
