```ts
import { Routes } from '@angular/router';
import { ExampleComponent } from './example.component';

export const routes: Routes = [
  {
    path: 'example',
    component: ExampleComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard-page.component').then((m) => m.DashboardPageComponent),
      },
      {
        path: 'dashboard/:id',
        loadComponent: () => import('./item-detail/item-detail-page.component').then((m) => m.ItemDetailPageComponent),
      },
      {
        path: 'settings',
        loadComponent: () => import('./settings/settings-page.component').then((m) => m.SettingsPageComponent),
      },
      {
        path: '',
        redirectTo: '/example/dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/example/dashboard',
    pathMatch: 'full',
  },
];
```
