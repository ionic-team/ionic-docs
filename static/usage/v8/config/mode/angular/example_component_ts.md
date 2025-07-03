```ts
import { Component } from '@angular/core';
import { Config, IonicModule } from '@ionic/angular';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  imports: [IonicModule, NgIf],
  standalone: true,
})
export class ExampleComponent {
  modeValue = '';

  constructor(public config: Config) {
    this.modeValue = this.config.get('mode');
  }
  showMode() {
    this.modeValue = this.config.get('mode');
  }
}
```
