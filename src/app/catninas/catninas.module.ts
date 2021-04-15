import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatninasPageRoutingModule } from './catninas-routing.module';

import { CatninasPage } from './catninas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatninasPageRoutingModule
  ],
  declarations: [CatninasPage]
})
export class CatninasPageModule {}
