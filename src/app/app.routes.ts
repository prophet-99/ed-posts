import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@/modules/index').then((m) => m.Home),
  },
  {
    path: 'actualidad',
    loadComponent: () => import('@/modules/index').then((m) => m.Highlight),
  },
];
