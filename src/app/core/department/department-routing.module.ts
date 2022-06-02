import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteDeptComponent } from './delete-dept/delete-dept.component';
import { DepartmentComponent } from './department.component';
import { EditdeptComponent } from './editdept/editdept.component';

const routes: Routes = [
  { path: '', component: DepartmentComponent },
  { path: 'edit/:id', component:EditdeptComponent},
  { path: 'remove/:id', component:DeleteDeptComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
