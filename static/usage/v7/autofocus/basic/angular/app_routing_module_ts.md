```ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExampleComponent } from './example.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: ExampleComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```
