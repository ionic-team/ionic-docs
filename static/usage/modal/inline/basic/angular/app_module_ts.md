```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, IonicModule.forRoot({}), FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
