```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  isPickerOpen = false;

  public pickerColumns = [{
    name: 'languages',
    options: [
      {
        text: 'JavaScript',
        value: 'javascript'
      }, {
        text: 'TypeScript',
        value: 'typescript'
      }, {
        text: 'Rust',
        value: 'rust'
      }, {
        text: 'C#',
        value: 'c#'
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
        window.alert(`You selected: ${value.languages.value}`);
      }
    }
  ];

  setOpen(isOpen: boolean) {
    this.isPickerOpen = isOpen;
  }
}
```
