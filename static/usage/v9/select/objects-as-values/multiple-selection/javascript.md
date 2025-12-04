```html
<ion-list>
  <ion-item>
    <ion-select aria-label="Food" placeholder="Select food" multiple="true"></ion-select>
  </ion-item>
</ion-list>

<script>
  const foods = [
    {
      id: 1,
      name: 'Apples',
      type: 'fruit',
    },
    {
      id: 2,
      name: 'Carrots',
      type: 'vegetable',
    },
    {
      id: 3,
      name: 'Cupcakes',
      type: 'dessert',
    },
  ];

  const compareWithFn = (o1, o2) => {
    if (!o1 || !o2) {
      return o1 === o2;
    }

    if (Array.isArray(o2)) {
      return o2.some((o) => o.id === o1.id);
    }

    return o1.id === o2.id;
  };

  const selectEl = document.querySelector('ion-select');
  selectEl.compareWith = compareWithFn;

  foods.forEach((option, i) => {
    const selectOption = document.createElement('ion-select-option');
    selectOption.value = option;
    selectOption.textContent = option.name;
    selectEl.appendChild(selectOption);
  });

  selectEl.addEventListener('ionChange', () => {
    console.log('Current value:', JSON.stringify(selectEl.value));
  });
</script>
```
