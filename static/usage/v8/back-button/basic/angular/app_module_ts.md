```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example.component';

import { PageOneComponent } from './page-one.component';
import { PageTwoComponent } from './page-two.component';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot([]), IonicModule.forRoot({})],
  declarations: [AppComponent, ExampleComponent, PageOneComponent, PageTwoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
