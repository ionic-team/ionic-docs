```ts
import { Component } from '@angular/core';
import { IonButton, IonPicker } from '@ionic/angular/standalone';

interface PickerValue {
  languages: {
    text: string;
    value: string;
  };
}

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonPicker],
})
export class ExampleComponent {
  isPickerOpen = false;

  public pickerColumns = [
    {
      name: 'languages',
      options: [
        {
          text: 'JavaScript',
          value: 'javascript',
        },
        {
          text: 'TypeScript',
          value: 'typescript',
        },
        {
          text: 'Rust',
          value: 'rust',
        },
        {
          text: 'C#',
          value: 'c#',
        },
      ],
    },
  ];

  public pickerButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'Confirm',
      handler: (value: PickerValue) => {
        console.log(`You selected: ${value.languages.value}`);
      },
    },
  ];

  setOpen(isOpen: boolean) {
    this.isPickerOpen = isOpen;
  }
}
```
