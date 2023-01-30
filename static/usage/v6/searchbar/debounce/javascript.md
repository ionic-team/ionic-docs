```html
<ion-searchbar debounce="1000"></ion-searchbar>
<ion-list></ion-list>

<script>
  const searchbar = document.querySelector('ion-searchbar');
  const list = document.querySelector('ion-list');

  const data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  let results = [...data];
  filterItems(results);

  searchbar.addEventListener('ionChange', handleChange);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    results = data.filter(d => d.toLowerCase().indexOf(query) > -1);
    filterItems(results);
  }

  function filterItems(results) {
    list.replaceChildren();

    let items = '';

    for (let i = 0; i < results.length; i++) {
      items += `
        <ion-item>
          <ion-label>${results[i]}</ion-label>
        </ion-item>
      `;
    }

    list.innerHTML = items;
  }
</script>
```
