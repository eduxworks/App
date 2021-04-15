import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatninosPage } from './catninos.page';

const routes: Routes = [
  {
    path: '',
    component: CatninosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatninosPageRoutingModule {}
