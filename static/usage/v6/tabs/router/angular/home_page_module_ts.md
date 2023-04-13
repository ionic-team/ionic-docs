```ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';

import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: HomePageComponent }])],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class HomePageModule {}
```
