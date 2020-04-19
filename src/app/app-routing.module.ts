import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: '', component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: './modules/auth/login/login.module#LoginModule'
      },
      {
        path: 'change-password',
        loadChildren: './modules/auth/change-password/change-password.module#ChangePasswordModule'
      }
    ]
  },
  {
    path:'',component:DashboardComponent,
    children:[
      {
        path:'home',
        loadChildren:'./modules/home/home.module#HomeModule'

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
