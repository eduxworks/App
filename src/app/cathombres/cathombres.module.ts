import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CathombresPageRoutingModule } from './cathombres-routing.module';

import { CathombresPage } from './cathombres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CathombresPageRoutingModule
  ],
  declarations: [CathombresPage]
})
export class CathombresPageModule {}
