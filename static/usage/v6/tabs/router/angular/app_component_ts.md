```ts
import { Component, EnvironmentInjector } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  imports: [IonicModule],
  standalone: true,
})
export class AppComponent {
  constructor(public environmentInjector: EnvironmentInjector) {}
}
```
