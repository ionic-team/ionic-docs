```html
<ion-list>
  <ion-radio-group></ion-radio-group>
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
    return o1.id === o2.id;
  };

  const radioGroupEl = document.querySelector('ion-radio-group');
  radioGroupEl.compareWith = compareWithFn;

  foods.forEach((option, i) => {
    const radio = document.createElement('ion-radio');

    radio.value = option;
    radio.textContent = option.name;

    const item = document.createElement('ion-item');
    item.appendChild(radio);

    radioGroupEl.appendChild(item);
  });

  radioGroupEl.addEventListener('ionChange', () => {
    console.log('Current value:', JSON.stringify(radioGroupEl.value));
  });
</script>
```
