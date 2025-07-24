```ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./example.component').then((m) => m.ExampleComponent),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home-page.component').then((m) => m.HomePageComponent),
      },
      {
        path: 'radio',
        loadComponent: () => import('./radio/radio-page.component').then((m) => m.RadioPageComponent),
      },
      {
        path: 'library',
        loadComponent: () => import('./library/library-page.component').then((m) => m.LibraryPageComponent),
      },
      {
        path: 'search',
        loadComponent: () => import('./search/search-page.component').then((m) => m.SearchPageComponent),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ]
  },
];
```