```html
<ion-list>
  <ion-item>
    <ion-select placeholder="Select food"></ion-select>
  </ion-item>
  <ion-item lines="none">
    <ion-label>
      Current value:
      <ion-text></ion-text>
    </ion-label>
  </ion-item>
</ion-list>

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
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
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
