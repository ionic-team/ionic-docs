```ts
import { Component } from '@angular/core';
import { IonItem, IonList, IonRadio, IonRadioGroup } from '@ionic/angular/standalone';

interface Food {
  id: number;
  name: string;
  type: string;
}

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonList, IonRadio, IonRadioGroup],
})
export class ExampleComponent {
  foods: Food[] = [
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

  compareWith(o1: Food, o2: Food): boolean {
    return o1.id === o2.id;
  }

  handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log('Current value:', JSON.stringify(target.value));
  }
}
```
