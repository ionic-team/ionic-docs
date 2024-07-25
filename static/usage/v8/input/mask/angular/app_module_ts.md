```ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example.component';

import { MaskitoDirective } from '@maskito/angular';

@NgModule({
  imports: [BrowserModule, FormsModule, MaskitoDirective, IonicModule.forRoot({})],
  declarations: [AppComponent, ExampleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
