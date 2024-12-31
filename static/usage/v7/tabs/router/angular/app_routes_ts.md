```ts
import { Routes } from '@angular/router';
import { ExampleComponent } from './example.component';

export const routes: Routes = [
  {
    path: 'example',
    component: ExampleComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home-page.component').then((m) => m.HomePageComponent),
      },
      {
        path: 'library',
        loadComponent: () => import('./library/library-page.component').then((m) => m.LibraryPageComponent),
      },
      {
        path: 'radio',
        loadComponent: () => import('./radio/radio-page.component').then((m) => m.RadioPageComponent),
      },
      {
        path: 'search',
        loadComponent: () => import('./search/search-page.component').then((m) => m.SearchPageComponent),
      },
      {
        path: '',
        redirectTo: '/example/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/example/home',
    pathMatch: 'full',
  },
];
```
