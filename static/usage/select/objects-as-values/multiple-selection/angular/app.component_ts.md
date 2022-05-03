```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  currentFood = "";

  foods = [
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

  compareWith(o1, o2) {
    if(!o1 || !o2) {
      return o1 === o2;
    }

    if(Array.isArray(o2)) {
      return o2.some((o) => o.id === o1.id);
    }

    return o1.id === o2.id;
  }

  handleChange(ev) {
    this.currentFood = JSON.stringify(ev.target.value);
  }
}

```