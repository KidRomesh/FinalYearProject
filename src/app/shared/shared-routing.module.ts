import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SharedComponent } from './shared.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: '', component: SharedComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      {
        path: 'Home', component: NavComponent, children: [
          { path: '', redirectTo: 'dashboard' },
          { path: 'dashboard', loadChildren: () => import('../core/dashboard/dashboard.module').then(m => m.DashboardModule) },
          { path: 'dep', loadChildren: () => import('../core/department/department.module').then(m => m.DepartmentModule) },
        ]
      },
    ]
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
