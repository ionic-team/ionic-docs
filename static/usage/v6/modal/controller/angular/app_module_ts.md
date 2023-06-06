```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example.component';

import { ModalExampleComponent } from './modal-example.component';

@NgModule({
  imports: [BrowserModule, FormsModule, IonicModule.forRoot({})],
  declarations: [AppComponent, ExampleComponent, ModalExampleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
