```ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RadioPageComponent } from './radio-page.component';

import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: RadioPageComponent }])],
  declarations: [RadioPageComponent],
  exports: [RadioPageComponent],
})
export class RadioPageModule {}
```
