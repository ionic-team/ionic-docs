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
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home',
          },
          {
            path: 'home',
            loadChildren: () => import('./home/home-page.module').then((m) => m.HomePageModule),
          },
          {
            path: 'radio',
            loadChildren: () => import('./radio/radio-page.module').then((m) => m.RadioPageModule),
          },
          {
            path: 'library',
            loadChildren: () => import('./library/library-page.module').then((m) => m.LibraryPageModule),
          },
          {
            path: 'search',
            loadChildren: () => import('./search/search-page.module').then((m) => m.SearchPageModule),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```
