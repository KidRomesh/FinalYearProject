import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RmcComponent } from './rmc/rmc.component';
import { SearchComponent } from './search/search.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path:'search/:id', component: SearchComponent },
  { path:'remove/:id', component: RmcComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
