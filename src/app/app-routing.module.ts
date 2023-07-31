import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';

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
        path: 'cDetails',
        loadChildren: () =>
          import('./views/front/camp-details/camp-details.module').then(
            (m) => m.CampDetailsModule
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./views/front/services/services.module').then(
            (m) => m.ServicesModule
          ),
      },
      {
        path: 'cCamp',
        loadChildren: () =>
          import('./views/front/choose-camp/choose-camp.module').then(
            (m) => m.ChooseCampModule
          ),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/admin/dashbord/dashbord.module').then(
            (m) => m.DashbordModule
          ),
      },
      {
        path: 'addCamp',
        loadChildren: () =>
          import('./views/admin/add-camp-place/add-camp-place.module').then(
            (m) => m.AddCampPlaceModule
          ),
      },
      {
        path: 'addUser',
        loadChildren: () =>
          import('./views/admin/add-user/add-user.module').then(
            (m) => m.AddUserModule
          ),
      },
      {
        path: 'addtent',
        loadChildren: () =>
          import('./views/admin/addtent/addtent.module').then(
            (m) => m.AddtentModule
          ),
      },
      {
        path: 'allData',
        loadChildren: () =>
          import('./views/admin/all-data/all-data.module').then(
            (m) => m.AllDataModule
          ),
      },
    ],
  },
  { path: 'auth', component: AuthAdminLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
