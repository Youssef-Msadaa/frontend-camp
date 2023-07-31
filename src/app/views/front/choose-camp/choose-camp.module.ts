import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChooseCampRoutingModule } from './choose-camp-routing.module';
import { ChooseCampComponent } from './choose-camp/choose-camp.component';


@NgModule({
  declarations: [
    ChooseCampComponent
  ],
  imports: [
    CommonModule,
    ChooseCampRoutingModule
  ]
})
export class ChooseCampModule { }
