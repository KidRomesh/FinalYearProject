import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [
  {
    path: '', component: NavComponent,
    children: [
      { path: '', loadChildren: () => import('../core/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'dep', loadChildren: () => import('../core/department/department.module').then(m => m.DepartmentModule) },
    ]
  },
  { path:'login', component:LoginComponent}






];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
