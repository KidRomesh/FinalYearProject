import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { RolesComponent } from './roles.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', component: RolesComponent },
  { path: 'update/:id', component:UpdateComponent},
  { path: 'delete/:id', component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
