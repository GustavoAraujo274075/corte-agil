import { Routes } from '@angular/router';
import { Menu } from './menu/menu/menu';

export const routes: Routes = [
  { path: '', component: Menu },
  { path: 'menu/menu', component: Menu },
];
