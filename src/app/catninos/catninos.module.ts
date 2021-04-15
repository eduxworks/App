import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatninosPageRoutingModule } from './catninos-routing.module';

import { CatninosPage } from './catninos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatninosPageRoutingModule
  ],
  declarations: [CatninosPage]
})
export class CatninosPageModule {}
