import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatninasPage } from './catninas.page';

const routes: Routes = [
  {
    path: '',
    component: CatninasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatninasPageRoutingModule {}
