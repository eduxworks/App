import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatmujeresPage } from './catmujeres.page';

const routes: Routes = [
  {
    path: '',
    component: CatmujeresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatmujeresPageRoutingModule {}
