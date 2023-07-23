import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcampPlaceComponent } from './addcamp-place/addcamp-place.component';

const routes: Routes = [{ path: '', component: AddcampPlaceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCampPlaceRoutingModule {}
