```ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, IonicModule.forRoot({ mode: 'md' })],
  declarations: [AppComponent, ExampleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
