```ts
import { Component, ViewChild } from '@angular/core';
import { IonAccordion, IonAccordionGroup, IonButton, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonAccordion, IonAccordionGroup, IonButton, IonItem, IonLabel],
})
export class ExampleComponent {
  @ViewChild('accordionGroup', { static: true }) accordionGroup!: IonAccordionGroup;

  toggleAccordion = () => {
    const nativeEl = this.accordionGroup;
    if (nativeEl.value === 'second') {
      nativeEl.value = undefined;
    } else {
      nativeEl.value = 'second';
    }
  };
}
```
