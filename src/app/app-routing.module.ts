import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FrontLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/front/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./views/front/login-user/login-user.module').then(
            (m) => m.LoginUserModule
          ),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./views/front/register/register.module').then(
            (m) => m.RegisterModule
          ),
      },
      {
        path: 'campDetails',
        loadChildren: () =>
          import('./views/front/camp-details/camp-details.module').then(
            (m) => m.CampDetailsModule
          ),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./views/front/services/services.module').then(
            (m) => m.ServicesModule
          ),
      },
    ],
  },
  { path: 'admin', component: AdminLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
