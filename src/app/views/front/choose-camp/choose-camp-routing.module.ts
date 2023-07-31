import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseCampComponent } from './choose-camp/choose-camp.component';

const routes: Routes = [{ path: '', component: ChooseCampComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseCampRoutingModule {}
