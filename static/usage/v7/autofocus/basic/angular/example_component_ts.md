```ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
})
export class ExampleComponent {
  @ViewChild('input') input: IonInput;
  ionViewWillEnter() {
    this.input.setFocus();
  }
}
```
