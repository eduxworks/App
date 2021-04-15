import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CathombresPage } from './cathombres.page';

const routes: Routes = [
  {
    path: '',
    component: CathombresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CathombresPageRoutingModule {}
