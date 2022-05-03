```html
<ion-select placeholder="Select food" multiple="true"></ion-select>
<ion-label class="ion-padding">
  Current value:
  <ion-text>[]</ion-text>
</ion-label>

<script>
  const foods = [
    {
      id: 1,
      name: "Apples",
      type: "fruit"
    },
    {
      id: 2,
      name: "Carrots",
      type: "vegetable"
    },
    {
      id: 3,
      name: "Cupcakes",
      type: "dessert"
    }
  ];

  const compareWithFn = (o1, o2) => {
    if(!o1 || !o2) {
      return o1 === o2;
    }

    if(Array.isArray(o2)) {
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

  const valueLabel = document.querySelector('ion-text');
  selectEl.addEventListener('ionChange', () => {
    valueLabel.innerHTML = JSON.stringify(selectEl.value);
  });
</script>
```
