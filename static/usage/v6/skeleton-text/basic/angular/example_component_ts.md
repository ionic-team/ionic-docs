```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class ExampleComponent {
  public loaded = false;
}
```
