import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'tasks', component: TasksComponent },
      { path: 'employees', loadChildren: () => import('../employees/employees.module').then(m => m.EmployeesModule) },
      { path: 'dep', loadChildren: () => import('../department/department.module').then(m => m.DepartmentModule) },
      { path: 'roles', loadChildren: () => import('../roles/roles.module').then(m => m.RolesModule) }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
