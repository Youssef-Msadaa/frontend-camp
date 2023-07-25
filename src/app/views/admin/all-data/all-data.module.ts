import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllDataRoutingModule } from './all-data-routing.module';
import { AllDataComponent } from './all-data/all-data.component';


@NgModule({
  declarations: [
    AllDataComponent
  ],
  imports: [
    CommonModule,
    AllDataRoutingModule
  ]
})
export class AllDataModule { }
