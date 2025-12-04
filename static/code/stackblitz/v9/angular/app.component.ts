import { Component } from '@angular/core';
import { IonApp } from '@ionic/angular/standalone';
import { ExampleComponent } from './example.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  imports: [ExampleComponent, IonApp],
})
export class AppComponent {
  constructor() {}
}
