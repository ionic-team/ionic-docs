```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class ExampleComponent {
  logs: string[] = [];

  pushLog(msg) {
    this.logs.unshift(msg);
  }

  handleChange(e) {
    this.pushLog('ionChange fired with value: ' + e.detail.value);
  }
}
```
