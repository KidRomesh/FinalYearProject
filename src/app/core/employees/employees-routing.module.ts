import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path:'info/:id', component: InfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
