import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { InfoComponent } from './info/info.component';
import { RemoveComponent } from './remove/remove.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path:'info/:id', component: InfoComponent },
  { path:'remove/:id', component: RemoveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
