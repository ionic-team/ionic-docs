import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';

const DECLARATIONS = [/* CUSTOM_DECLARATIONS */];

@NgModule({
  imports: [BrowserModule, IonicModule.forRoot({})],
  declarations: [AppComponent, ...DECLARATIONS],
  bootstrap: [AppComponent],
})
export class AppModule { }
