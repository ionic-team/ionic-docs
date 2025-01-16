```ts
import { Component, ViewChild } from '@angular/core';
import { IonInput, IonItem, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonInput, IonItem, IonList],
})
export class ExampleComponent {
  inputModel = '';

  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;

  onInput(event: CustomEvent) {
    const value = (event.target as HTMLIonInputElement).value ?? '';

    // Removes non alphanumeric characters
    const filteredValue = (value as string).replace(/[^a-zA-Z0-9]+/g, '');

    /**
     * Update both the state variable and
     * the component to keep them in sync.
     */
    this.ionInputEl.value = this.inputModel = filteredValue;
  }
}
```
