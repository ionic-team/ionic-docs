```ts
import { Component } from '@angular/core';
import { Config, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  imports: [IonButton]
})

export class ExampleComponent {
  mode: string;
  constructor(public config: Config) {
    this.mode = this.config.get('mode');
  }
}
```
