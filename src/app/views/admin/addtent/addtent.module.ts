import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddtentRoutingModule } from './addtent-routing.module';
import { AddtentComponent } from './addtent/addtent.component';


@NgModule({
  declarations: [
    AddtentComponent
  ],
  imports: [
    CommonModule,
    AddtentRoutingModule
  ]
})
export class AddtentModule { }
