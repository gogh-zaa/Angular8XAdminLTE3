import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routesConfig: Routes = [
  {
    path: 'index3',
    loadChildren: () => import('./state/index3/index3.module').then(m => m.Index3Module)
  },
  {
    path: 'index1',
    loadChildren: () => import('./state/index1/index1.module').then(m => m.Index1Module)
  },
  {
    path: 'index2',
    loadChildren: () => import('./state/index2/index2.module').then(m => m.Index2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routesConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
