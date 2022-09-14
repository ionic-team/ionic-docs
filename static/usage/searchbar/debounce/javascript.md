```html
<ion-searchbar debounce="1000"></ion-searchbar>

<ion-list>
  <ion-item>Amsterdam</ion-item>
  <ion-item>Buenos Aires</ion-item>
  <ion-item>Cairo</ion-item>
  <ion-item>Geneva</ion-item>
  <ion-item>Hong Kong</ion-item>
  <ion-item>Istanbul</ion-item>
  <ion-item>London</ion-item>
  <ion-item>Madrid</ion-item>
  <ion-item>New York</ion-item>
  <ion-item>Panama City</ion-item>
</ion-list>

<script>
  const searchbar = document.querySelector('ion-searchbar');
  const items = Array.from(document.querySelector('ion-list').children);

  searchbar.addEventListener('ionChange', handleChange);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();

    items.forEach((item) => {
      const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
      item.style.display = shouldShow ? 'block' : 'none';
    });
  }
</script>
```
