```html
<ion-content color="light">
  <div class="container">
    <ion-list inset="true">
      <ion-item button="true" detail="false" id="select-fruit">
        <ion-label>Favorite Fruit</ion-label>
        <div slot="end" id="selected-fruit">None</div>
      </ion-item>
    </ion-list>
  </div>
</ion-content>

<ion-modal trigger="select-fruit">
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button onclick="modal.dismiss()">Cancel</ion-button>
      </ion-buttons>
      <ion-title>Favorite Fruit</ion-title>
    </ion-toolbar>
    <ion-toolbar>
      <ion-searchbar></ion-searchbar>
    </ion-toolbar>
  </ion-header>
  <ion-content color="light" class="ion-padding">
    <ion-list id="modal-list" inset="true">
    </ion-list>
  </ion-content>
</ion-modal>

<script>
  var list = document.querySelector('ion-list#modal-list');
  var modal = document.querySelector('ion-modal');
  var searchbar = document.querySelector('ion-searchbar');
  var selectedFruit = document.querySelector('#selected-fruit');
  var fruits = [
    { text: 'Apple', value: 'apple' },
    { text: 'Apricot', value: 'apricot' },
    { text: 'Banana', value: 'banana' },
    { text: 'Blackberry', value: 'blackberry' },
    { text: 'Blueberry', value: 'blueberry' },
    { text: 'Cherry', value: 'cherry' },
    { text: 'Cranberry', value: 'cranberry' },
    { text: 'Grape', value: 'grape' },
    { text: 'Grapefruit', value: 'grapefruit' },
    { text: 'Guava', value: 'guava' },
    { text: 'Jackfruit', value: 'jackfruit' },
    { text: 'Lime', value: 'lime' },
    { text: 'Mango', value: 'mango' },
    { text: 'Nectarine', value: 'nectarine' },
    { text: 'Orange', value: 'orange' },
    { text: 'Papaya', value: 'papaya' },
    { text: 'Passionfruit', value: 'passionfruit' },
    { text: 'Peach', value: 'peach' },
    { text: 'Pear', value: 'pear' },
    { text: 'Plantain', value: 'plantain' },
    { text: 'Plum', value: 'plum' },
    { text: 'Pineapple', value: 'pineapple' },
    { text: 'Pomegranate', value: 'pomegranate' },
    { text: 'Raspberry', value: 'raspberry' },
    { text: 'Strawberry', value: 'strawberry' }
  ];

  function filterList(searchQuery = undefined) {
    if (searchQuery === undefined) return fruits;

    const normalizedQuery = searchQuery.toLowerCase();

    return fruits.filter(fruit => fruit.value.includes(normalizedQuery));
  }

  function selectFruit(fruit) {
    modal.dismiss(fruit);
  }

  function renderList(searchQuery = undefined) {
    const data = filterList(searchQuery);
    let template = '';

    data.forEach((item, index) => {
      template += `
        <ion-item button="true" detail="false" onclick="selectFruit('${item.text}')">
          <ion-label>${item.text}</ion-label>
        </ion-item>
      `
    });

    list.innerHTML = template;
  }

  searchbar.addEventListener('ionInput', (ev) => {
    renderList(ev.target.value);
  });

  modal.addEventListener('ionModalWillDismiss', (ev) => {
    const { data } = ev.detail;

    if (data === undefined) return;

    selectedFruit.innerText = data;
  });

  modal.addEventListener('ionModalDidDismiss', (ev) => {
    searchbar.value = undefined;
    renderList();
  });

  renderList();
</script>
```
