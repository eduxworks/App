import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage

  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cathombres',
    loadChildren: () => import('./cathombres/cathombres.module').then( m => m.CathombresPageModule)
  },
  {
    path: 'catmujeres',
    loadChildren: () => import('./catmujeres/catmujeres.module').then( m => m.CatmujeresPageModule)
  },
  {
    path: 'catninos',
    loadChildren: () => import('./catninos/catninos.module').then( m => m.CatninosPageModule)
  },
  {
    path: 'catninas',
    loadChildren: () => import('./catninas/catninas.module').then( m => m.CatninasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
