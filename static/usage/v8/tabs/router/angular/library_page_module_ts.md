```ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { LibraryPageComponent } from './library-page.component';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: LibraryPageComponent }])],
  declarations: [LibraryPageComponent],
  exports: [LibraryPageComponent],
})
export class LibraryPageModule {}
```
