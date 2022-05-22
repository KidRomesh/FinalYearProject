import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', redirectTo:'role' },
  { path: 'role', component: RolesComponent },
  { path: 'update/:id', component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
