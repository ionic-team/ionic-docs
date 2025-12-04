import { Component } from '@angular/core';
import { IonApp, IonContent } from '@ionic/angular/standalone';
import { ExampleComponent } from './example.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  imports: [ExampleComponent, IonApp, IonContent],
})
export class AppComponent {
  constructor() {}
}
