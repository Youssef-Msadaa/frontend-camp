import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampDetailsComponent } from './camp-details/camp-details.component';

const routes: Routes = [{ path: '', component: CampDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampDetailsRoutingModule {}
