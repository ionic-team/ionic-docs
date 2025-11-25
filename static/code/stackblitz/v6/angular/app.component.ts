import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from './example.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  imports: [IonicModule, ExampleComponent, RouterOutlet],
  standalone: true
})
export class AppComponent { }
