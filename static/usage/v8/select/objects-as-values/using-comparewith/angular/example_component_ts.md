```ts
import { Component } from '@angular/core';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

interface Food {
  id: number;
  name: string;
  type: string;
}

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonList, IonSelect, IonSelectOption],
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

  compareWith(o1: Food | null, o2: Food | null): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  handleChange(event: Event) {
    const target = event.target as HTMLIonSelectElement;
    console.log('Current value:', JSON.stringify(target.value));
  }
}
```
