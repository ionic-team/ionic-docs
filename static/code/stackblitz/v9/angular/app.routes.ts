import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'example',
    loadComponent: () => import('./example.component').then((m) => m.ExampleComponent),
  },
  {
    path: '',
    redirectTo: 'example',
    pathMatch: 'full',
  },
];
