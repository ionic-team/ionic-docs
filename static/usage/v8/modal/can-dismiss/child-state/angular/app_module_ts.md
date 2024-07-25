```ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example.component';
import { ChildComponent } from './child.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([]), IonicModule.forRoot({})],
  declarations: [AppComponent, ExampleComponent, ChildComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
