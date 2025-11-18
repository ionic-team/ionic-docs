```ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PageOneComponent } from './page-one.component';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  component = PageOneComponent;
}
```
