```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { PopoverComponent } from './popover.component';

@NgModule({
  imports: [BrowserModule, IonicModule.forRoot({})],
  declarations: [AppComponent, PopoverComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```