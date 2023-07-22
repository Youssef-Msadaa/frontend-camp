import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampDetailsRoutingModule } from './camp-details-routing.module';
import { CampDetailsComponent } from './camp-details/camp-details.component';


@NgModule({
  declarations: [
    CampDetailsComponent
  ],
  imports: [
    CommonModule,
    CampDetailsRoutingModule
  ]
})
export class CampDetailsModule { }
