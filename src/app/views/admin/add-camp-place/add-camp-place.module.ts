import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCampPlaceRoutingModule } from './add-camp-place-routing.module';
import { AddcampPlaceComponent } from './addcamp-place/addcamp-place.component';


@NgModule({
  declarations: [
    AddcampPlaceComponent
  ],
  imports: [
    CommonModule,
    AddCampPlaceRoutingModule
  ]
})
export class AddCampPlaceModule { }
