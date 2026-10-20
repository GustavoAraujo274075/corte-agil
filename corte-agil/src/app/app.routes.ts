import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () =>
      import('./menu/menu-module').then((a) => a.MenuModule),
  },
];
