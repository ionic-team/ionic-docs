```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  public pickerColumns = [{
    name: 'meat',
    options: [
      {
        text: 'Pepperoni',
        value: 'pepperoni'
      }, {
        text: 'Smoked Ham',
        value: 'smoked-ham'
      }, {
        text: 'Crispy Bacon',
        value: 'bacon'
      }
    ]
  }, {
    name: 'veggies',
    options: [
      {
        text: 'Red onion',
        value: 'red-onion'
      }, {
        text: 'Peppers',
        value: 'peppers'
      }, {
        text: 'Black olives',
        value: 'black-olives'
      }
    ]
  }, {
    name: 'crust',
    options: [
      {
        text: 'Pan style',
        value: 'pan'
      }, {
        text: 'Hand tossed',
        value: 'hand-tossed'
      }, {
        text: 'Stuffed crust',
        value: 'stuffed-crust'
      }
    ]
  }];

  public pickerButtons = [
    {
      text: 'Cancel',
      role: 'cancel'
    },
    {
      text: 'Confirm',
      handler: (value) => {
        window.alert(`You selected a ${value.crust.text} pizza with ${value.meat.text} and ${value.veggies.text}`);
      }
    }
  ];
}
```
