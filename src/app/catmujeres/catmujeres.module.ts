import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatmujeresPageRoutingModule } from './catmujeres-routing.module';

import { CatmujeresPage } from './catmujeres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatmujeresPageRoutingModule
  ],
  declarations: [CatmujeresPage]
})
export class CatmujeresPageModule {}
